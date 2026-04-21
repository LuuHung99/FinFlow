import type { ComponentType, SVGProps } from 'react';
import { IconUtensils, IconCar, IconBag, IconHome, IconFilm, IconHeart, IconGift, IconArrowUp } from '../components/Icons';
import { FF_CORAL, FF_SKY, FF_VIOLET } from './constants';

export interface Category {
  name: string;
  color: string;
  bg: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const CATEGORIES: Record<string, Category> = {
  food: { name: 'Ăn uống', color: FF_CORAL, bg: '#FFE4E4', icon: IconUtensils },
  transport: { name: 'Di chuyển', color: FF_SKY, bg: '#E0F4FC', icon: IconCar },
  shopping: { name: 'Mua sắm', color: '#E59B0B', bg: '#FFF4D0', icon: IconBag },
  home: { name: 'Nhà ở', color: FF_VIOLET, bg: '#EDE4FF', icon: IconHome },
  fun: { name: 'Giải trí', color: '#0FB894', bg: '#DDF7EE', icon: IconFilm },
  health: { name: 'Sức khỏe', color: '#EC4899', bg: '#FCE7F3', icon: IconHeart },
  gift: { name: 'Quà tặng', color: '#F43F5E', bg: '#FFE4E6', icon: IconGift },
  income: { name: 'Lương', color: '#16A34A', bg: '#DCFCE7', icon: IconArrowUp },
};
