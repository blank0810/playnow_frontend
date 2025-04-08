export type Merchant = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Business = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Merchant;
  tags?: string[];
  publishedAt?: string;
};
