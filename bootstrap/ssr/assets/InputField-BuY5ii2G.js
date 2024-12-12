import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { c as cn } from "../app.js";
import { F as FormField, a as FormItem, b as FormLabel, c as FormControl, d as FormMessage } from "./form-DvJ9gCwN.js";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input px-3 py-2 text-base file:border-0 bg-transparent file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
function InputField({
  label,
  placeholder,
  name,
  dark,
  control
}) {
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control,
      name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { className: "text-xs leading-6 text-gray-400 flex flex-row items-center gap-3", children: label }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Input,
            {
              ...field,
              type: "text",
              className: cn(
                "bg-transparent border-0 border-b border-gray-400 rounded-none focus:outline-none focus-visible:ring-0 p-0 text-2lg text-gray-500 placeholder:text-gray-400 sm:text-md sm:leading-6",
                dark ? "text-light-700" : ""
              ),
              placeholder
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { className: "text-xs text-red-400" })
        ] });
      }
    }
  );
}
export {
  InputField as I,
  Input as a
};
