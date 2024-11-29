import React from "react";
import { lazy } from "react";
import MainLayout from "../components/layout/MainLayout";

// Lazy load components
const HomeDark = lazy(() => import("../views/all-home-version/HomeDark"));
const NotFound = lazy(() => import("../views/NotFound"));
const Preview = lazy(() => import("../views/Preview"));
const AboutPage = lazy(() => import("../components/about/AboutPage"));
const Portfolio = lazy(() => import("../components/portfolio/Portfolio"));
const Contact = lazy(() => import("../components/Contact"));

const withLayout = (Component) => (
  <MainLayout>
    <Component />
  </MainLayout>
);

export const routes = [
  {
    path: "/",
    element: withLayout(HomeDark),
    exact: true,
  },
  {
    path: "/preview",
    element: withLayout(Preview),
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
