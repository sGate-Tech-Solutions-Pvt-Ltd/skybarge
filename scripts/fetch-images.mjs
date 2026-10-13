// One-time script: copies the real images from the old WordPress site into /public/images,
// replacing the placeholder artwork shipped with the project.
// Run once with `npm run fetch-images`, then commit the images.
// After that the new site has no dependency on the old server.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const WP = 'https://www.skybarge.in/wp-content/uploads';

const files = {
  'logo.png': `${WP}/2021/03/skybarge-logo.png`,
  'logo-light.png': `${WP}/2021/07/skybarge-logo.png`,
  'favicon.jpg': `${WP}/2021/03/favicon.jpg`,

  'hero-ocean.jpg': `${WP}/2021/03/ocenfre.jpg`,
  'hero-air.jpg': `${WP}/2021/04/plane_contrasted_light.jpg`,
  'hero-warehousing.jpg': `${WP}/2021/07/commercial-banner.jpg`,
  'hero-projects.jpg': `${WP}/2021/07/Slider-2.jpg`,
  'hero-transport.jpg': `${WP}/2021/03/transportation.jpg`,
  'hero-customs.jpg': `${WP}/2021/03/custom.jpg`,

  'about.jpg': `${WP}/2021/03/home-page.jpg`,
  'world-map.png': `${WP}/2021/07/map.png`,

  'icons/air.png': `${WP}/2021/03/icn-freight-100x100.png`,
  'icons/ocean.png': `${WP}/2021/03/icn-ocen-freight-100x100.png`,
  'icons/warehousing.png': `${WP}/2021/03/icn-warehousing-100x100.png`,
  'icons/projects.png': `${WP}/2021/03/icn-projects-100x100.png`,
  'icons/consolidation.png': `${WP}/2021/03/icn-consolidation-100x100.png`,
  'icons/land.png': `${WP}/2021/03/icn-land-trans-100x100.png`,
  'icons/customs.png': `${WP}/2021/03/icn-custom-clear-100x100.png`,
  'icons/door.png': `${WP}/2021/03/icn-door-door-100x100.png`,

  'services/freight-forwarding.jpg': `${WP}/2020/11/freight-fwd-icon.jpg`,
  'services/warehousing.jpg': `${WP}/2020/11/wae-dist-icon.jpg`,
  'services/customs.jpg': `${WP}/2020/11/hiaquan.jpg`,
  'services/additional.jpg': `${WP}/2020/11/add-serv-icon.jpg`,
};

for (const n of ['1', '3', '4', '5', '7', '8', '9', '10', 'uno']) {
  files[`partners/${n}.png`] = `${WP}/2021/03/${n}.png`;
}

const outDir = new URL('../public/images/', import.meta.url).pathname;
let ok = 0;
let failed = 0;

for (const [name, url] of Object.entries(files)) {
  const dest = join(outDir, name);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (site migration)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`  saved  ${name}`);
    ok++;
  } catch (err) {
    console.warn(`  FAILED ${name} (${url}): ${err.message}`);
    failed++;
  }
}

console.log(`\n${ok} saved, ${failed} failed.`);
if (failed) console.log('Download the failed files manually and place them at the paths shown.');
