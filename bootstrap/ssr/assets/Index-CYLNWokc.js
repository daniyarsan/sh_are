import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, useForm as useForm$1, Head } from "@inertiajs/react";
import { B as Button, M as MainLayout, a as ButtonLink } from "./MainLayout-C7F2wrkU.js";
import { useEffect } from "react";
import { h as OTPSchema, e as Form } from "./form-DvJ9gCwN.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
function TwoFactorForm() {
  const { auth } = usePage().props;
  const form = useForm({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      otp: "",
      secret: auth.secret
    }
  });
  const formValues = form.watch();
  const { data, setData, post } = useForm$1({
    otp: "",
    secret: ""
  });
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("twofactor.store"));
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col space-y-10", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex justify-center",
          dangerouslySetInnerHTML: { __html: auth.qr }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(InputField, { name: "otp", control: form.control }) })
    ] }),
    /* @__PURE__ */ jsx(Button, { className: "bg-primary", children: "Continue" })
  ] }) });
}
function Index() {
  const { auth } = usePage().props;
  const title = "Подключение 2FA";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("section", { className: "px-5", children: /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 md:w-4/12 flex-col m-auto items-center justify-center space-y-8", children: [
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Отсканируйте этот QR-код в приложении аутентикатора или введите код вручную - ",
        /* @__PURE__ */ jsx("span", { className: "text-md font-medium", children: auth.secret }),
        "."
      ] }),
      /* @__PURE__ */ jsx(TwoFactorForm, {}),
      /* @__PURE__ */ jsx(ButtonLink, { className: "bg-dark-900", href: route("profile.index"), children: "Пропустить" })
    ] }) })
  ] });
}
export {
  Index as default
};
