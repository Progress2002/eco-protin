interface Route {
  name: string;
  path: string;
}

export const ROUTES: Route[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
];
