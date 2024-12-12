import { jsxs, jsx } from "react/jsx-runtime";
import { M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { Head } from "@inertiajs/react";
import { C as CaseDisplayRequest, I as ImagePreview, a as CallToApply, N as NextCase } from "./ImagePreview-CUHNBCh1.js";
import { V as VideoPreview } from "./VideoPreview-v3MkPmRj.js";
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
import "./dialog-DPipvyZ_.js";
import "@radix-ui/react-dialog";
function One({
  application,
  next
}) {
  const title = application.story_title;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("section", { className: "px-5", children: /* @__PURE__ */ jsxs("div", { className: "space-y-[5em] my-10 md:my-20 mt-5 md:mx-auto md:mb-10 md:w-10/12", children: [
      /* @__PURE__ */ jsx("h1", { className: "md:w-9/12", children: title }),
      /* @__PURE__ */ jsx(
        CaseDisplayRequest,
        {
          imageUrl: `/storage/images/${application.avatar_path}`,
          text: application.story_request,
          username: application == null ? void 0 : application.username
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `grid grid-cols-2 md:grid-cols-4 gap-4`, children: application.videos.map((item, index) => {
        return /* @__PURE__ */ jsx(VideoPreview, { video: item }, index);
      }) }),
      application.story_brief && /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
        /* @__PURE__ */ jsx("h3", { children: "Запрос" }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("p", { children: application.story_brief }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
        /* @__PURE__ */ jsx("h3", { children: "Наша помощь" }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("p", { children: application.story_description }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `grid grid-cols-2 md:grid-cols-4 gap-4`, children: application.images.map((item, index) => {
        return /* @__PURE__ */ jsx(ImagePreview, { image: item }, index);
      }) }),
      /* @__PURE__ */ jsx(
        CallToApply,
        {
          text: "Считаете, что вам тоже нужна помощь?",
          buttonText: "Написать письмо",
          href: route("application.index")
        }
      ),
      /* @__PURE__ */ jsx(NextCase, { application: next })
    ] }) })
  ] });
}
export {
  One as default
};
