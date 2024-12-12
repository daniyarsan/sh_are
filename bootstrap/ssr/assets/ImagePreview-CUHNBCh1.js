import { jsxs, jsx } from "react/jsx-runtime";
import { a as ButtonLink } from "./MainLayout-C7F2wrkU.js";
import { Link } from "@inertiajs/react";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-DPipvyZ_.js";
const CallToApply = ({ text, href, buttonText }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col rounded-2xl bg-primary p-8 md:flex-row justify-between gap-5", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full md:w-7/12", children: /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-2xl text-white", children: text }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-5/12 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-full md:w-8/12", children: /* @__PURE__ */ jsx(
      ButtonLink,
      {
        href,
        className: "bg-dark-900 hover:bg-dark-700 text-white",
        children: buttonText
      }
    ) }) })
  ] });
};
function Next({ href, ...props }) {
  if (href) {
    return /* @__PURE__ */ jsx(
      Link,
      {
        href,
        ...props,
        className: "bg-gray-100 opacity-70 hover:opacity-100 rounded-full flex justify-center items-center p-4 cursor-pointer",
        children: /* @__PURE__ */ jsx("img", { src: `/assets/icons/chevron-right.svg`, alt: "", className: "w-7" })
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...props,
      className: "bg-gray-100 opacity-70 hover:opacity-100 rounded-full flex justify-center items-center p-4 cursor-pointer",
      children: /* @__PURE__ */ jsx("img", { src: `/assets/icons/chevron-right.svg`, alt: "", className: "w-7" })
    }
  );
}
function NextCasePreview({
  application
}) {
  var _a;
  return /* @__PURE__ */ jsx("div", { className: "relative size-24", children: ((_a = application.videos[0]) == null ? void 0 : _a.preview_path) && /* @__PURE__ */ jsx(
    "img",
    {
      className: "h-full w-full object-cover rounded-2xl",
      src: `/storage/videos/thumb/${application.videos[0].preview_path}`
    }
  ) });
}
function NextCase({
  application
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-5 border-y py-10", children: [
    /* @__PURE__ */ jsx(NextCasePreview, { application }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-5 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm uppercase text-gray-500", children: "Следующая история" }),
      /* @__PURE__ */ jsx("div", { className: "font-medium text-lg", children: application.story_title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Next, { href: route("case.one", application.id.toString()) }) })
  ] });
}
function CaseDisplayRequest({
  imageUrl,
  text,
  username
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row bg-light border border-gray-700 p-10 w-full mx-auto shadow-[20px_20px_10px_0px_rgba(100,100,100)]", children: [
    /* @__PURE__ */ jsx("div", { className: "md:w-1/12 hidden md:block", children: /* @__PURE__ */ jsx("img", { className: "size-14 rounded-[40px] object-cover", src: imageUrl }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:w-11/12 text-md space-y-4", children: [
      username && /* @__PURE__ */ jsxs("div", { className: "font-medium", children: [
        "@",
        username
      ] }),
      /* @__PURE__ */ jsx("div", { className: "", dangerouslySetInnerHTML: { __html: text } }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: `/assets/icons/like.svg`, alt: "", className: "size-5" }),
          /* @__PURE__ */ jsx("span", { className: "mt-1 text-gray-500", children: "15" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ jsx("img", { src: `/assets/icons/dislike.svg`, alt: "", className: "w-5" }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 uppercase", children: "Ответить" }) })
      ] })
    ] })
  ] });
}
function ImagePreview({ image }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative h-[200px]", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "h-full w-full object-cover rounded-2xl",
        src: `/storage/images/${image.filepath}`
      },
      image.id
    ),
    /* @__PURE__ */ jsxs(Dialog, { children: [
      /* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx("span", { className: "absolute-center z-10 size-25 bg-dark-900 opacity-80 hover:opacity-100 rounded-full flex justify-center items-center p-5 cursor-pointer", children: /* @__PURE__ */ jsx("img", { src: `/assets/icons/eye.svg`, alt: "", className: "w-6" }) }) }),
      /* @__PURE__ */ jsxs(DialogContent, { className: "md:max-w-fit border-0 shadow-none", children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { className: "hidden", children: "Настройки" }),
          /* @__PURE__ */ jsx(DialogDescription, { className: "hidden" })
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "rounded-2xl mx-auto max-w-[80%] max-h-[90vh] z-50",
            src: `/storage/images/${image.filepath}`
          },
          image.id
        )
      ] })
    ] })
  ] });
}
export {
  CaseDisplayRequest as C,
  ImagePreview as I,
  NextCase as N,
  CallToApply as a
};
