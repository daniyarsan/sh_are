import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
function Tabs({ options, onChange, current }) {
  return /* @__PURE__ */ jsx("ul", { className: "flex flex-row text-center", children: options.map((item, index) => {
    return /* @__PURE__ */ jsx("li", { className: "me-1", children: /* @__PURE__ */ jsxs(
      "a",
      {
        className: "tab-pin relative",
        onClick: () => onChange(item.value),
        children: [
          item.value === current && /* @__PURE__ */ jsx(
            motion.div,
            {
              layoutId: "active-tab",
              className: "absolute border border-primary inset-0 rounded-full",
              transition: { type: "spring", duration: 0.6 }
            }
          ),
          item.label
        ]
      }
    ) }, index);
  }) });
}
export {
  Tabs as T
};
