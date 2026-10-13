// Static-site form handling: no server of our own.
// If PUBLIC_WEB3FORMS_KEY is set at build time, submissions go to Web3Forms,
// which emails them to the address you registered. Otherwise the form
// opens the visitor's email app with the message pre-filled.

const ENDPOINT = 'https://api.web3forms.com/submit';

function setStatus(form: HTMLFormElement, text: string, state: 'ok' | 'error' | '') {
  const el = form.querySelector<HTMLElement>('.form-status');
  if (!el) return;
  el.textContent = text;
  el.dataset.state = state;
}

function toMailto(form: HTMLFormElement, data: FormData) {
  const to = form.dataset.mailto ?? 'india@skybarge.in';
  const subject = String(data.get('subject') ?? 'Website enquiry');
  const lines: string[] = [];
  for (const [k, v] of data.entries()) {
    if (['subject', 'access_key', 'botcheck', 'from_name'].includes(k) || !v) continue;
    const label = form.querySelector(`label[for="${form.id}-${k}"]`)?.textContent?.trim() ?? k;
    lines.push(`${label}: ${v}`);
  }
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

document.querySelectorAll<HTMLFormElement>('form[data-static-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    if (data.get('botcheck')) return; // honeypot filled: silently drop spam

    const key = form.dataset.key;
    if (!key) {
      toMailto(form, data);
      setStatus(form, 'Your email app has opened with the message ready to send.', 'ok');
      return;
    }

    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const original = button?.textContent ?? '';
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    setStatus(form, '', '');

    try {
      data.set('access_key', key);
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || `HTTP ${res.status}`);
      form.reset();
      setStatus(form, form.dataset.success ?? 'Sent. We will reply within one working day.', 'ok');
    } catch {
      setStatus(form, `The message could not be sent. Email us directly at ${form.dataset.mailto ?? 'india@skybarge.in'}.`, 'error');
    } finally {
      if (button) { button.disabled = false; button.textContent = original; }
    }
  });
});
