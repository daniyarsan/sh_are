import { jsxs, jsx } from "react/jsx-runtime";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectGroup, e as SelectItem } from "./select-DSL7ZOI_.js";
function SelectFilter({
  label,
  defaultValue,
  options,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-5", children: [
    label && /* @__PURE__ */ jsx("label", { children: label }),
    /* @__PURE__ */ jsxs(Select, { onValueChange: onChange, defaultValue: defaultValue || void 0, children: [
      /* @__PURE__ */ jsx(SelectTrigger, { className: `rounded-md border px-10 h-10`, children: /* @__PURE__ */ jsx("div", { className: "line-clamp-1 flex-1 text-left", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Выбрать" }) }) }),
      /* @__PURE__ */ jsx(SelectContent, { className: "border-none", children: /* @__PURE__ */ jsx(SelectGroup, { children: options.map((item) => /* @__PURE__ */ jsx(
        SelectItem,
        {
          value: item.value,
          className: "cursor-pointer focus:bg-light-800 dark:focus:bbg-dark-700",
          children: item.label
        },
        item.value
      )) }) })
    ] })
  ] });
}
export {
  SelectFilter as S
};
