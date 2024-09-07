import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const Course = lazy(() => import("./pages/Course"));
const Category = lazy(() => import("./pages/Category"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/category", element: <Category /> },
  { path: "/course", element: <Course /> },
];

export default routes;
