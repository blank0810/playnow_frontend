import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Coupons",
    newTab: false,
    path: "/error",
  },
  {
    id: 2.1,
    title: "Unlock",
    newTab: false,
    path: "/error",
  },
  {
    id: 2.3,
    title: "Insights",
    newTab: false,
    path: "/error",
  },
  {
    id: 3,
    title: "Partners",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "eNAN",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sir Jan",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Klent",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Albert",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Sam",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "JK",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Contact us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
