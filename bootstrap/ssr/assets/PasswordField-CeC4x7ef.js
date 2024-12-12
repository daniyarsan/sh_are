import { jsx, jsxs } from "react/jsx-runtime";
import { a as Input } from "./InputField-BuY5ii2G.js";
import { useState } from "react";
import { F as FormField, a as FormItem, b as FormLabel, c as FormControl, d as FormMessage } from "./form-DvJ9gCwN.js";
function InputField({
  label,
  placeholder,
  name,
  control
}) {
  const [hidden, setHidden] = useState(true);
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control,
      name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { className: "text-xs leading-6 text-gray-400 flex flex-row items-center gap-3", children: label }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                ...field,
                type: hidden ? "password" : "text",
                className: "bg-transparent border-0 border-b border-gray-400 rounded-none focus:outline-none focus-visible:ring-0 p-0 text-2lg text-gray-500 placeholder:text-gray-400 sm:text-md sm:leading-6",
                placeholder
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                onClick: () => {
                  setHidden(!hidden);
                },
                src: `/assets/icons/${hidden ? "eye-off" : "eye"}.svg`,
                alt: "",
                className: "w-6 cursor-pointer absolute-right"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(FormMessage, { className: "text-xs text-red-400" })
        ] });
      }
    }
  );
}
export {
  InputField as I
};
