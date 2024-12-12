import { jsxs, jsx } from "react/jsx-runtime";
import { A as Animate, f as funds } from "./Animate-Qeg0hltR.js";
import { a as ButtonLink } from "./MainLayout-C7F2wrkU.js";
const CallToAction = ({ text, href, buttonText }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col-reverse rounded-2xl bg-primary text-white md:flex-row py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col px-8 md:w-8/12 md:py-8 space-y-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-2xl", children: text }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-4/12", children: /* @__PURE__ */ jsx(ButtonLink, { href, className: "bg-dark-900 text-white", children: buttonText }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative items-center size-10 justify-center hidden md:w-4/12", children: /* @__PURE__ */ jsx(Animate, { data: funds }) })
  ] });
};
export {
  CallToAction as C
};
