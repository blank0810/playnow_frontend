import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Coupons",
    newTab: false,
    path: "/coupons",
  },
  {
    id: 2,
    title: "Partners",
    newTab: false,
    path: "/merchant",
  },
  {
    id: 3,
    title: "About us",
    newTab: false,
    submenu: [
      {
        id: 5,
        title: "About us",
        newTab: false,
        path: "/aboutUs",
      },
      {
        id: 6,
        title: "Testimonials",
        newTab: false,
        path: "/testimonials",
      },
      {
        id: 7,
        title: "FAQs",
        newTab: false,
        path: "/faqs",
      },
      {
        id: 8,
        title: "Subscription Plans",
        newTab: false,
        path: "/pricing",
      },
    ]
  },
  {
    id: 4,
    title: "Contact us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
