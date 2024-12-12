import { jsxs, jsx } from "react/jsx-runtime";
import { M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { P as ProjectCard } from "./ProjectCard-B-hc9IdZ.js";
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
import "./BannerMobile-CXFIbvgC.js";
function Index({ finished, fresh }) {
  const title = "Projects";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "px-5", children: [
      /* @__PURE__ */ jsx("div", { className: "my-10 md:my-20", children: /* @__PURE__ */ jsx("h1", { children: title }) }),
      /* @__PURE__ */ jsx("div", { className: "my-10 md:my-20", children: /* @__PURE__ */ jsx("h2", { children: "Done" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-1 gap-4 md:grid-cols-2", children: finished.map((project) => {
        return /* @__PURE__ */ jsx(ProjectCard, { project }, project.id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "my-10 md:my-20", children: /* @__PURE__ */ jsx("h2", { children: "Voting" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-1 gap-4 md:grid-cols-2", children: fresh.map((project) => {
        return /* @__PURE__ */ jsx(ProjectCard, { project }, project.id);
      }) })
    ] })
  ] });
}
export {
  Index as default
};
