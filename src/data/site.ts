// All site content lives here, so text changes never require touching layout code.

export const company = {
  name: 'Sky-Barge Freight Pvt Ltd',
  shortName: 'Sky-Barge',
  tagline: 'Large enough to handle, small enough to care.',
  founded: 2004,
  email: 'india@skybarge.in',
  hours: 'Mon to Sat, 9:30 AM to 6:30 PM',
  phoneDisplay: '+91-11-43158900 to 04',
  phoneHref: '+911143158900',
  address: ['2nd Floor, 06 Club Drive Road', 'Ghitorni, New Delhi 110030', 'India'],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/skybargefreightindia' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sky-barge-freight-pvt-ltd---india/' },
    { label: 'Instagram', href: 'https://www.instagram.com/skybarge/' },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us/' },
  { label: 'Services', href: '/all-services/' },
  { label: 'Global network', href: '/global-network/' },
  { label: 'Contact us', href: '/contact-us/' },
];

// Hero modes (replaces the old Slider Revolution carousel).
export const modes = [
  { id: 'ocean', label: 'Ocean freight', note: 'LCL and FCL exports and imports through every major Indian port.', image: '/images/hero-ocean.jpg' },
  { id: 'air', label: 'Air freight', note: 'Air exports and imports, including time-critical and holiday clearances.', image: '/images/hero-air.jpg' },
  { id: 'warehousing', label: 'Warehousing', note: 'Storage, indent deliveries and distribution across India.', image: '/images/hero-warehousing.jpg' },
  { id: 'projects', label: 'Projects', note: 'Heavy-lift and over-dimensional cargo, route surveys and charters.', image: '/images/hero-projects.jpg' },
  { id: 'transport', label: 'Transportation', note: 'Inland domestic transportation of all kinds, door to door.', image: '/images/hero-transport.jpg' },
  { id: 'customs', label: 'Customs clearance', note: 'EOU, SEZ, FTA, ATA Carnet, project imports and licence shipments.', image: '/images/hero-customs.jpg' },
];

// "What we do" capabilities from the homepage.
export const capabilities = [
  { title: 'Air freight', detail: 'Exports and imports', icon: '/images/icons/air.png' },
  { title: 'Ocean freight', detail: 'LCL / FCL exports and imports', icon: '/images/icons/ocean.png' },
  { title: 'Warehousing & distribution', detail: 'Storage and onward delivery', icon: '/images/icons/warehousing.png' },
  { title: 'Projects', detail: 'Heavy-lift and ODC cargo', icon: '/images/icons/projects.png' },
  { title: 'Consolidation', detail: 'Shipment consolidation at origin', icon: '/images/icons/consolidation.png' },
  { title: 'Land transportation', detail: 'Inland domestic movement', icon: '/images/icons/land.png' },
  { title: 'Customs clearance', detail: 'Imports, exports and schemes', icon: '/images/icons/customs.png' },
  { title: 'Door to door', detail: 'Pick-up through final delivery', icon: '/images/icons/door.png' },
];

export const services = [
  {
    slug: 'international-freight-forwarding',
    title: 'International Freight Forwarding',
    summary: 'Air and sea exports and imports, charters, cross-country shipments and project logistics.',
    image: '/images/services/freight-forwarding.jpg',
    items: [
      'Project logistics',
      'Charter arrangements',
      'Third-country / cross-country shipments',
      'Door deliveries and pick-ups',
      'Air and sea exports and imports',
      'Shipment consolidation services at origin',
      'Inland domestic transportation of all kinds',
      'Time-critical shipments and holiday clearances in customs',
    ],
  },
  {
    slug: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    summary: 'Warehousing, indent deliveries and the movement of heavy-lift and over-dimensional cargo.',
    image: '/images/services/warehousing.jpg',
    items: [
      'Warehousing',
      'Route surveys',
      'Indent deliveries',
      'Deployment of heavy-lift cranes',
      'Transportation of heavy-lift and over-dimensional cargo',
    ],
  },
  {
    slug: 'custom-clearance',
    title: 'Customs Clearance',
    summary: 'Clearance under FTA, EOU, SEZ and licence schemes, plus classification consultancy.',
    image: '/images/services/customs.jpg',
    items: [
      'Clearance under FTA',
      '100% EOU, SEZ, STPI etc.',
      'Second-hand capital goods',
      'ATA Carnet and exhibition goods',
      'SVB assessments for joint ventures',
      'In-bond / ex-bond and high-sea sales',
      'Project imports registration and clearance',
      'Basic consultancy on customs classification and government schemes',
      'Regular exports, imports, re-exports and re-imports, and shipments under licences such as Advance Licence and EPCG',
    ],
  },
  {
    slug: 'additional-services',
    title: 'Additional Services',
    summary: 'Certificates, phytosanitary services, palletisation and fumigation.',
    image: '/images/services/additional.jpg',
    items: [
      'Certificate of origin',
      'Phytosanitary services',
      'Palletisation and fumigation',
      'Chartered engineer certificate',
      'Other services in the scope of exports and imports',
    ],
  },
];

export const branches = [
  {
    city: 'Delhi',
    role: 'Head office',
    address: '2nd Floor, 06 Club Drive Road, Ghitorni, New Delhi 110030',
    phones: [{ label: 'Tel', display: '+91-11-43158900 to 04', href: '+911143158900' }],
    email: 'india@skybarge.in',
  },
  {
    city: 'Mumbai',
    role: 'Branch',
    address: 'B-107, First Floor, Navkar Chambers, Andheri Kurla Road, near Marol Metro Station, Marol Naka, Andheri East, Mumbai 400059',
    phones: [
      { label: 'Mob', display: '78348 35511', href: '+917834835511' },
      { label: 'Tel', display: '022 4617 1294', href: '+912246171294' },
    ],
    email: 'india@skybarge.in',
  },
  {
    city: 'Chennai',
    role: 'Branch',
    address: 'No. 10, Thillaiganga Nagar 26th Street, Nanganallur, 100 Ft Ring Road, Chennai 600061',
    phones: [
      { label: 'Mob', display: '98410 20550', href: '+919841020550' },
      { label: 'Tel', display: '044 4859 3838', href: '+914448593838' },
    ],
    email: 'india@skybarge.in',
  },
];

export const partners = ['1', '3', '4', '5', '7', '8', '9', '10', 'uno'].map(
  (n) => `/images/partners/${n}.png`,
);

export const freightTypes = ['Road transportation', 'Air transportation', 'Sea transportation', 'Warehousing'];
export const incoterms = ['EXW', 'FCA', 'CPT', 'CIP', 'DAT', 'DAP', 'DDP', 'FAS', 'FOB', 'CFR', 'CIF'];
