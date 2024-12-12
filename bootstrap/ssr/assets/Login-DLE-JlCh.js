import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, useForm as useForm$1, router, Head } from "@inertiajs/react";
import { B as Button, M as MainLayout, a as ButtonLink } from "./MainLayout-C7F2wrkU.js";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { P as ParamsContext } from "../app.js";
import { I as InputField } from "./InputField-BuY5ii2G.js";
import { L as LoginSchema, e as Form } from "./form-DvJ9gCwN.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { I as InputField$1 } from "./PasswordField-CeC4x7ef.js";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
import "axios";
import "react-dom/client";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
function LoginForm() {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error("ParamsContext must be used within a ParamsProvider");
  }
  const { setLoading } = context;
  const { csrf_token } = usePage().props;
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      login: "",
      password: "",
      _token: csrf_token
    }
  });
  const { setData, post, data } = useForm$1({
    login: "",
    password: "",
    _token: csrf_token
  });
  const formValues = form.watch();
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("login"));
  }
  router.on("start", function() {
    setLoading(true);
  });
  router.on("finish", function() {
    setLoading(false);
  });
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx(
      InputField,
      {
        label: "Login",
        placeholder: "",
        name: "login",
        control: form.control
      }
    ),
    /* @__PURE__ */ jsx(
      InputField$1,
      {
        label: "Password",
        placeholder: "******",
        name: "password",
        control: form.control
      }
    ),
    /* @__PURE__ */ jsx(Button, { className: "bg-primary", children: "Enter" })
  ] }) });
}
function Login() {
  const title = "Вход в аккаунт";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("section", { className: "px-5", children: /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 md:w-4/12 flex-col m-auto items-center justify-center space-y-10", children: [
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx(LoginForm, {}),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-5", children: /* @__PURE__ */ jsx(ButtonLink, { href: "/register", children: "Register" }) })
    ] }) })
  ] });
}
export {
  Login as default
};
