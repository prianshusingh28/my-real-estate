import { Property } from '../types';
import flat1 from '../assets/flat1.png';
import flat2 from '../assets/flat2.png';
import flat3 from '../assets/flat3.png';

export const properties: Property[] = [
  {
    id: 1,
    type: '1RK',
    title: 'Cozy 1RK Studio Flat',
    shortDesc: 'Perfect for working professionals. Fully ventilated with modern fittings and 24/7 water supply.',
    fullDesc: 'This well-designed 1RK studio flat is ideal for single working professionals or students. Located in the heart of Ormanjhi, it offers excellent connectivity to Ranchi city. The flat features a spacious room with a dedicated kitchen area, modern bathroom fittings, and large windows for natural light and ventilation. The building has 24/7 security and is walking distance from local markets and public transport.',
    price: 7500,
    size: 350,
    floor: '2nd Floor',
    available: true,
    totalFlats: 3,
    availableCount: 1,
    images: [
      flat1,
      flat1,
      flat1,
    ],
    amenities: ['24/7 Water Supply', 'Covered Parking', 'Power Backup', 'Security Guard', 'Balcony', 'Modular Kitchen'],
    highlights: ['Walking distance to market', 'Near bus stop', 'Quiet neighborhood', 'Freshly painted'],
  },
  {
    id: 2,
    type: '2BHK',
    title: 'Spacious 2BHK Family Flat',
    shortDesc: 'Ideal for families. Two well-lit bedrooms, spacious hall, and modern kitchen with all amenities.',
    fullDesc: 'This beautifully designed 2BHK flat is perfect for small to medium-sized families. It features two spacious bedrooms with large windows, a bright living room, a fully-equipped modular kitchen, and two modern bathrooms. The flat has ample storage space, dedicated parking, and is situated in a peaceful, well-maintained residential complex. Close to schools, hospitals, and shopping centers in Ormanjhi.',
    price: 13000,
    size: 750,
    floor: '3rd Floor',
    available: true,
    totalFlats: 6,
    availableCount: 1,
    images: [
      flat2,
      flat2,
      flat2,
    ],
    amenities: ['24/7 Water Supply', 'Covered Parking', 'Power Backup', 'Security Guard', 'Balcony', 'Modular Kitchen', 'CCTV', 'Lift'],
    highlights: ['Near St. Xavier School', 'Close to hospital', 'Gated community', 'Vastu compliant'],
  },
  {
    id: 3,
    type: '3BHK',
    title: 'Premium 3BHK Luxury Flat',
    shortDesc: 'Premium living with 3 large bedrooms, designer interior, terrace access, and premium fixtures.',
    fullDesc: 'Experience premium living in this stunning 3BHK flat designed for discerning families who appreciate quality. The flat boasts three large bedrooms including a master suite with attached bathroom, a grand living and dining area, a fully-equipped designer kitchen, and two additional modern bathrooms. Premium finishes throughout, including Italian marble flooring, premium sanitary ware, and designer lighting. The complex offers a rooftop terrace, gym, and 24/7 security in a prime Ormanjhi location.',
    price: 22000,
    size: 1200,
    floor: '4th Floor',
    available: false,
    totalFlats: 6,
    availableCount: 0,
    images: [
      flat3,
      flat3,
      flat3,
    ],
    amenities: ['24/7 Water Supply', '2 Covered Parking', 'Power Backup', '24/7 Security', 'Balcony', 'Modular Kitchen', 'CCTV', 'Lift', 'Terrace Access', 'Gym'],
    highlights: ['Italian marble flooring', 'Premium sanitary ware', 'Designer lighting', 'Rooftop access', 'Semi-furnished'],
  },
];
