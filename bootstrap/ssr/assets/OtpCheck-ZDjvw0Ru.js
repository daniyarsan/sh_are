import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, useForm as useForm$1, Head } from "@inertiajs/react";
import { B as Button, M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { O as OtpCheckSchema, e as Form } from "./form-DvJ9gCwN.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { I as InputField } from "./OTPField-C7sZmm_d.js";
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
import "zod";
import "@radix-ui/react-label";
import "input-otp";
function OtpForm() {
  const { csrf_token } = usePage().props;
  const form = useForm({
    resolver: zodResolver(OtpCheckSchema),
    defaultValues: {
      otp: ""
    }
  });
  const { setData, post, data } = useForm$1({
    otp: "",
    _token: csrf_token
  });
  const formValues = form.watch();
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData({ ...formValues, _token: csrf_token });
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("otp.store"));
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx(InputField, { name: "otp", control: form.control }),
    /* @__PURE__ */ jsx(Button, { className: "bg-primary", children: "Check" })
  ] }) });
}
function Login() {
  const title = "Введите 2FA код";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("section", { className: "px-5", children: /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 md:w-4/12 flex flex-col m-auto space-y-5", children: [
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx(OtpForm, {})
    ] }) })
  ] });
}
export {
  Login as default
};
