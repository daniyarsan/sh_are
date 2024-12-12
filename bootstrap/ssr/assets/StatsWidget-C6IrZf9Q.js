import { jsxs, jsx } from "react/jsx-runtime";
import clsx from "clsx";
function StatsWidget({
  subText,
  subTextSize = "xs",
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-[1em]", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-primary", children }),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: clsx({
          "text-xs": subTextSize === "xs",
          "text-sm": subTextSize === "sm",
          "text-md": subTextSize === "md"
        }),
        children: subText
      }
    )
  ] });
}
export {
  StatsWidget as S
};
