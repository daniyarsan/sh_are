import { jsxs, jsx } from "react/jsx-runtime";
import { M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { Head } from "@inertiajs/react";
import "react";
import "../app.js";
import "axios";
import "react-dom/client";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
function Rating() {
  const title = "Рейтинг площадок";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("section", { className: "px-5", children: /* @__PURE__ */ jsx("div", { className: "my-10 md:my-20", children: /* @__PURE__ */ jsx("h1", { children: title }) }) })
  ] });
}
export {
  Rating as default
};
