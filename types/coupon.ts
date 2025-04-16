// In @/types/coupon.ts
export type Coupon = {
  id: number;
  category: string;
  icon: string;
  title: string;
  description: string;
  price: string | number; // <- add string here
};
