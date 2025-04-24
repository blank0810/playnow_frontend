export type Merchant = {
  id: number;
  name: string;
  category: string;
  image: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  address: string;
  numberOfCoupons: number;
  isFeatured: boolean;
  href?: string; // Optional href property for links
  imageLight?: string; // Optional imageLight property for dark mode
  isNew?: boolean; // Optional property to indicate if the merchant is new
  isHottest?: boolean; // Optional property to indicate if the merchant is hottest
};
