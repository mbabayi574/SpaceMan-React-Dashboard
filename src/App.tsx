import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import AppRoute from "./config/app-route.jsx";
import { slideToggle } from "./composables/slideToggle.js";

export default function App() {
  const element = useRoutes(AppRoute);
  const location = useLocation();

  // on every route change
  React.useEffect(() => {
    const elm = document.querySelector(".app");
    if (elm) {
      elm.classList.remove("app-sidebar-mobile-toggled");
    }
    const elm2 = document.querySelector(".app-top-nav");
    if (elm2 && (elm2 as HTMLElement).style.display === "block") {
      slideToggle(document.querySelector(".app-top-nav"));
    }
  }, [location]);