import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { B as BannerMobile, A as ActiveIndicator, P as ProjectProgress } from "./BannerMobile-CXFIbvgC.js";
import { a as ButtonLink } from "./MainLayout-C7F2wrkU.js";
function ProjectCard({
  project,
  featured = false
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `w-full bg-gray-100 flex flex-col justify-between space-y-[2em] rounded-2xl p-8`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Link, { href: `project/${project.slug}`, children: project.mobile_image_path && /* @__PURE__ */ jsx(
            BannerMobile,
            {
              image: `/storage/images/${project.mobile_image_path}`
            }
          ) }),
          /* @__PURE__ */ jsx(
            ActiveIndicator,
            {
              className: "inline-block rounded-full px-3 py-1 absolute top-2 left-2 text-sm text-white",
              status: project.status
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("h3", { className: "mt-4", children: project == null ? void 0 : project.name }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between gap-10", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ jsx(
          ProjectProgress,
          {
            unlim: !!project.featured,
            featured,
            project
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "md:w-5/12 w-full", children: /* @__PURE__ */ jsx(
          ButtonLink,
          {
            href: project.custom_url ? project.custom_url : `project/${project.slug}`,
            children: "Read more"
          }
        ) })
      ]
    }
  );
}
export {
  ProjectCard as P
};
