import { StaticImageData } from 'next/image';

export interface PostContent {
  status: 'closed' | 'expired' | 'active';
  title: string;
  date: string;
  location: string;
  price: number;
  priceChange: number;
  imgSrc?: StaticImageData;
}
