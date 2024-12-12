import { jsx, jsxs } from "react/jsx-runtime";
import { F as FormField, a as FormItem, b as FormLabel, c as FormControl, d as FormMessage } from "./form-DvJ9gCwN.js";
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { c as cn } from "../app.js";
const InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ jsx(
  OTPInput,
  {
    ref,
    containerClassName: cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    ),
    className: cn("disabled:cursor-not-allowed", className),
    ...props
  }
));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center", className), ...props }));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, role: "separator", ...props, children: /* @__PURE__ */ jsx(Dot, {}) }));
InputOTPSeparator.displayName = "InputOTPSeparator";
function InputField({
  label,
  name,
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
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(InputOTP, { maxLength: 6, ...field, children: [
            /* @__PURE__ */ jsxs(InputOTPGroup, { children: [
              /* @__PURE__ */ jsx(InputOTPSlot, { index: 0 }),
              /* @__PURE__ */ jsx(InputOTPSlot, { index: 1 }),
              /* @__PURE__ */ jsx(InputOTPSlot, { index: 2 })
            ] }),
            /* @__PURE__ */ jsx(InputOTPSeparator, {}),
            /* @__PURE__ */ jsxs(InputOTPGroup, { children: [
              /* @__PURE__ */ jsx(InputOTPSlot, { index: 3 }),
              /* @__PURE__ */ jsx(InputOTPSlot, { index: 4 }),
              /* @__PURE__ */ jsx(InputOTPSlot, { index: 5 })
            ] })
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
