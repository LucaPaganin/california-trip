import type { Segment } from './types';

export const segments: Segment[] = [
  { from: 'Los Angeles', to: 'San Diego', net: '2h 15m', real: '4–5h', km: '~200 km', via: 'Via Pacific Coast Hwy, La Jolla' },
  { from: 'San Diego', to: 'Palm Springs', net: '2h', real: '2h 30m–3h', km: '~190 km', via: 'Via I-10 Est, Coachella Valley' },
  { from: 'Palm Springs', to: 'Needles', net: '3h', real: '5–6h', km: '~270 km', via: 'Via Twentynine Palms, Joshua Tree NP, I-40' },
  { from: 'Needles', to: 'Grand Canyon', net: '3h 30m', real: '5–6h', km: '~290 km', via: 'Via Oatman, Route 66, AZ-64 Sud' },
  { from: 'Grand Canyon', to: 'Page', net: '2h 30m', real: '4h', km: '~195 km', via: 'Via US-89 Nord, Cameron Trading Post' },
  { from: 'Page', to: 'Moab', net: '3h 45m', real: '6–7h', km: '~350 km', via: 'Via Antelope Canyon, US-163, Monument Valley, US-191' },
  { from: 'Moab', to: 'Bryce Canyon', net: '4h', real: '6–7h', km: '~385 km', via: 'Via Arches NP, UT-24, Red Canyon, UT-12' },
  { from: 'Bryce Canyon', to: 'Zion', net: '1h 30m', real: '2h 30m', km: '~140 km', via: 'Via UT-12, US-89, UT-9 (Zion-Mt Carmel Hwy)' },
  { from: 'Zion', to: 'Las Vegas', net: '2h 15m', real: '4h', km: '~245 km', via: 'Via Valley of Fire SP, I-15 Sud' },
  { from: 'Las Vegas', to: 'Mammoth Lakes', net: '5h', real: '6–7h', km: '~480 km', via: 'Via Death Valley NP, CA-136, US-395 Nord' },
  { from: 'Mammoth Lakes', to: 'Yosemite/Merced', net: '4h', real: '6–7h', km: '~265 km', via: 'Via Tioga Pass CA-120, Yosemite Valley, CA-140' },
  { from: 'Merced', to: 'San Francisco', net: '1h 45m', real: '2h 30m', km: '~185 km', via: 'Via CA-99, I-580, Bay Bridge' },
];
