export interface Hotel {
  name: string;
  price: string;
  note: string;
}

export interface HotelOptions {
  budget: Hotel;
  mid: Hotel;
  luxury: Hotel;
}

export interface Tip {
  icon: string;
  text: string;
}

export interface Stop {
  n: number;
  day: string;
  title: string;
  coords: [number, number];
  temp: string;
  driveFrom: string | null;
  driveNet: string | null;
  driveReal: string | null;
  driveKm: string | null;
  highlights: string[];
  tips: Tip[];
  hotel: HotelOptions;
}

export interface Segment {
  from: string;
  to: string;
  net: string;
  real: string;
  km: string;
  via: string;
}

export interface Stat {
  value: string;
  label: string;
}
