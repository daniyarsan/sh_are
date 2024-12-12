import * as z from "zod";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { FormProvider, Controller, useFormContext } from "react-hook-form";
import { c as cn } from "../app.js";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
const LOGIN_MIN_ERROR_TEXT = "Логин должен быть как минимум 3 символа";
const PASSWORD_MIN_ERROR_TEXT = "Пароль должен быть как минимум 6 символа";
const PASSWORD_FORMAT_ERROR_TEXT = "Пароль должен содержать не менее 10 символов хотя бы 1 спецсимвол и 1 заглавная буква";
const PASSWORD_MATCH_ERROR_TEXT = "Пароли должны совпадать";
const RegistrationSchema = z.object({
  login: z.string().min(3, LOGIN_MIN_ERROR_TEXT),
  password: z.string().min(6, PASSWORD_MIN_ERROR_TEXT).regex(
    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)/,
    PASSWORD_FORMAT_ERROR_TEXT
  ),
  password_confirmation: z.string(),
  _token: z.string(),
  hcaptcha: z.string().min(1, {
    message: "Требуется ввод капчи"
  })
}).refine((data) => data.password === data.password_confirmation, {
  path: ["confirmPassword"],
  // Set the path of the error
  message: PASSWORD_MATCH_ERROR_TEXT
});
const LoginSchema = z.object({
  login: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
  password: z.string().min(1, {
    message: "Обязательное поле"
  }),
  _token: z.string()
});
const OTPSchema = z.object({
  otp: z.string().min(6, {
    message: "ОТП должен быть не менее 6 цифр"
  }),
  secret: z.string()
});
const IMAGE_SCHEMA = z.instanceof(File).refine(
  (file) => [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/svg+xml",
    "image/gif"
  ].includes(file.type),
  { message: "Invalid image file type" }
).refine(
  (file) => {
    return file.size / 1024 / 1024 <= 10;
  },
  {
    message: "File size should not exceed 10MB"
  }
);
const SettingsProfileSchema = z.object({
  login: z.optional(z.string()),
  image: z.optional(IMAGE_SCHEMA),
  _token: z.string()
});
const SettingsPasswordSchema = z.object({
  current_password: z.string().min(1),
  password: z.string().min(6, PASSWORD_MIN_ERROR_TEXT).regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)/, PASSWORD_FORMAT_ERROR_TEXT),
  password_confirmation: z.string(),
  _token: z.string()
});
const SettingsOtpSchema = z.object({
  otp: z.string().min(6, {
    message: "ОТП должен быть не менее 6 цифр"
  }),
  secret: z.string(),
  _token: z.string()
});
const OtpCheckSchema = z.object({
  otp: z.string().min(6, {
    message: "ОТП должен быть не менее 6 цифр"
  })
});
const InvestmentSchema = z.object({
  project: z.string(),
  contact: z.string(),
  _token: z.string()
});
const ApplySchema = z.object({
  name: z.string().min(1, {
    message: "Обязательное поле"
  }),
  username: z.string().min(1, {
    message: "Обязательное поле"
  }),
  story_request: z.string().min(50, {
    message: "Минимальная длина сообщения - 50 символов"
  }),
  _token: z.string()
});
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
const Form = FormProvider;
const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(
  {}
);
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";
export {
  ApplySchema as A,
  FormField as F,
  InvestmentSchema as I,
  LoginSchema as L,
  OtpCheckSchema as O,
  RegistrationSchema as R,
  SettingsProfileSchema as S,
  FormItem as a,
  FormLabel as b,
  FormControl as c,
  FormMessage as d,
  Form as e,
  SettingsPasswordSchema as f,
  SettingsOtpSchema as g,
  OTPSchema as h
};
