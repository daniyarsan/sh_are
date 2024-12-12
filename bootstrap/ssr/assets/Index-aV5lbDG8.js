import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as AlertError, b as AlertSuccess, B as Button, a as ButtonLink, c as Button$1, M as MainLayout, P as ProfileAvatar } from "./MainLayout-C7F2wrkU.js";
import { usePage, useForm as useForm$1, router, Head } from "@inertiajs/react";
import { S as StatsWidget } from "./StatsWidget-C6IrZf9Q.js";
import { f as formatNoun } from "../app.js";
import { C as CompanyInvestmentsTable } from "./CompanyInvestmentsTable-EOvDjZxX.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-DPipvyZ_.js";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { F as FormField, a as FormItem, c as FormControl, d as FormMessage, S as SettingsProfileSchema, e as Form, f as SettingsPasswordSchema, g as SettingsOtpSchema } from "./form-DvJ9gCwN.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { I as InputField } from "./InputField-BuY5ii2G.js";
import { I as InputField$1 } from "./PasswordField-CeC4x7ef.js";
import { I as InputField$2 } from "./OTPField-C7sZmm_d.js";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
import "clsx";
import "axios";
import "react-dom/client";
import "tailwind-merge";
import "react-data-table-component";
import "@radix-ui/react-dialog";
import "zod";
import "@radix-ui/react-label";
import "input-otp";
function ProfileStats({ company }) {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto w-[80%] divide-y md:divide-y-0", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(StatsWidget, { subTextSize: "md", subText: "Всего пожертвовано", children: company == null ? void 0 : company.invested["formatted"] }) }),
    /* @__PURE__ */ jsx("div", { className: "pt-5 md:p-0", children: /* @__PURE__ */ jsx(
      StatsWidget,
      {
        subTextSize: "md",
        subText: "Проспонсировано",
        children: `${company == null ? void 0 : company.projectsCount} ${formatNoun(company == null ? void 0 : company.projectsCount, "проект", "проекта", "проектов")}`
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "pt-5 md:p-0", children: /* @__PURE__ */ jsx(StatsWidget, { subTextSize: "md", subText: "Дата вступления в Лигу", children: company.created_at }) })
  ] });
}
function SettingsIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "15px",
      height: "20px",
      viewBox: "0 0 15 20",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12.083 10.18c-.44 0-1.25-.07-1.25-.18v10h2.5V10c0 .11-.808.18-1.25.18m.695-7.905V0h-2.222v2.275c-1.112.43-2.223 1.575-2.223 2.933 0 1.726 1.493 3.125 3.334 3.125 1.84 0 3.333-1.399 3.333-3.125 0-1.358-1.111-2.503-2.222-2.933M4.167 10V0h-2.5v10a4.61 4.61 0 011.25-.18c.44 0 1.25.07 1.25.18m2.5 4.792c0 1.358-1.111 2.503-2.223 2.933V20H2.222v-2.275C1.112 17.295 0 16.15 0 14.792c0-1.726 1.492-3.125 3.333-3.125 1.841 0 3.334 1.399 3.334 3.125",
          transform: "translate(-1002 -168) translate(982 159) translate(20 9)",
          fill: "#FFF",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1
        }
      )
    }
  );
}
function AvatarUploadField({
  name,
  defaultImage,
  control
}) {
  const [preview, setPreview] = useState(
    defaultImage || "/assets/icons/avatar_placeholder.svg"
  );
  const hiddenFileInput = useRef(null);
  function handleClick() {
    var _a;
    (_a = hiddenFileInput.current) == null ? void 0 : _a.click();
  }
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control,
      name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "rounded-full size-36 bg-gray-200 cursor-pointer flex items-center justify-center overflow-hidden",
              onClick: handleClick,
              children: /* @__PURE__ */ jsx("img", { className: "object-contain", src: preview, alt: "avatar" })
            }
          ) }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              ref: hiddenFileInput,
              accept: "image/*",
              onChange: (e) => {
                var _a;
                const fileUploaded = (_a = e.target.files) == null ? void 0 : _a[0];
                field.onChange(fileUploaded);
                if (!fileUploaded) return;
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  if (fileReader.result) {
                    setPreview(fileReader.result);
                  }
                };
                fileReader.readAsDataURL(fileUploaded);
              },
              className: "hidden"
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { className: "text-xs text-red-400" })
        ] });
      }
    }
  );
}
function SettingsProfileForm() {
  var _a, _b;
  const { auth, csrf_token, ...props } = usePage().props;
  const form = useForm({
    resolver: zodResolver(SettingsProfileSchema),
    defaultValues: {
      _token: csrf_token
    }
  });
  const { setData, post, data } = useForm$1({
    _token: csrf_token
  });
  const formValues = form.watch();
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("profile.update.profile"));
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: "h-full flex flex-col gap-5",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(AlertError, { errors: props.errors }),
          /* @__PURE__ */ jsx(AlertSuccess, { message: props.success }),
          /* @__PURE__ */ jsx("h3", { children: "Профиль" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 gap-5", children: [
          /* @__PURE__ */ jsx(
            AvatarUploadField,
            {
              name: "image",
              defaultImage: ((_a = auth.user.company) == null ? void 0 : _a.image_path) ? `/storage/images/companies/${(_b = auth.user.company) == null ? void 0 : _b.image_path}` : void 0,
              control: form.control
            }
          ),
          /* @__PURE__ */ jsx(
            InputField,
            {
              label: "Логин",
              placeholder: "gentleman",
              name: "login",
              control: form.control
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Button, { className: "bg-primary", children: "Сохранить" }) })
      ]
    }
  ) });
}
function SettingsPasswordForm() {
  const { csrf_token, ...props } = usePage().props;
  const form = useForm({
    resolver: zodResolver(SettingsPasswordSchema),
    defaultValues: {
      current_password: "",
      password: "",
      password_confirmation: "",
      _token: csrf_token
    }
  });
  const { setData, post, data } = useForm$1({
    current_password: "",
    password: "",
    password_confirmation: "",
    _token: csrf_token
  });
  const formValues = form.watch();
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("profile.update.password"));
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: "h-full flex flex-col gap-5",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(AlertError, { errors: props.errors }),
          /* @__PURE__ */ jsx(AlertSuccess, { message: props.success }),
          /* @__PURE__ */ jsx("h3", { children: "Смена пароля" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(
            InputField$1,
            {
              label: "Текущий пароль",
              placeholder: "******",
              name: "current_password",
              control: form.control
            }
          ),
          /* @__PURE__ */ jsx(
            InputField$1,
            {
              label: "Пароль",
              placeholder: "******",
              name: "password",
              control: form.control
            }
          ),
          /* @__PURE__ */ jsx(
            InputField$1,
            {
              label: "Подтверждения пароля",
              placeholder: "******",
              name: "password_confirmation",
              control: form.control
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Button, { className: "bg-primary", children: "Сохранить" })
      ]
    }
  ) });
}
function SettingsTwoFactorForm() {
  const { auth, csrf_token, ...props } = usePage().props;
  const form = useForm({
    resolver: zodResolver(SettingsOtpSchema),
    defaultValues: {
      otp: "",
      secret: auth.secret,
      _token: csrf_token
    }
  });
  const { setData, post, data } = useForm$1({
    otp: "",
    secret: "",
    _token: csrf_token
  });
  const formValues = form.watch();
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("profile.update.twofactor"));
  }
  if (auth.user.google2fa_secret) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(AlertError, { errors: props.errors }),
      /* @__PURE__ */ jsx(AlertSuccess, { message: props.success }),
      /* @__PURE__ */ jsx("h3", { children: "Подключение 2FA" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Двухфакторная аутентификация подключена успешно!" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 flex flex-col", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              router.post(route("twofactor.destroy"));
            },
            children: "Отключить 2FA"
          }
        ),
        /* @__PURE__ */ jsx(ButtonLink, { href: route("reset_token.index"), children: "Устройство с 2FA утеряно" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: "h-full flex flex-col gap-5",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(AlertError, { errors: props.errors }),
          /* @__PURE__ */ jsx(AlertSuccess, { message: props.success }),
          /* @__PURE__ */ jsx("h3", { children: "Подключение 2FA" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            "Отсканируйте этот QR-код в приложении аутентикатора или введите код вручную: ",
            auth.secret
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex justify-center",
              dangerouslySetInnerHTML: { __html: auth.qr }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(InputField$2, { name: "otp", control: form.control }) })
        ] }),
        /* @__PURE__ */ jsx(Button, { className: "bg-primary", children: "Сохранить" })
      ]
    }
  ) });
}
function Settings() {
  const [currentPage, setCurrentPage] = useState(0);
  const settingsBlocks = [
    {
      title: "Профиль",
      component: /* @__PURE__ */ jsx(SettingsProfileForm, {})
    },
    {
      title: "Смена пароля",
      component: /* @__PURE__ */ jsx(SettingsPasswordForm, {})
    },
    {
      title: "Настройка 2FA",
      component: /* @__PURE__ */ jsx(SettingsTwoFactorForm, {})
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "md:w-[1000px] md:min-h-[450px]", children: /* @__PURE__ */ jsxs("div", { className: "relative grid grid-cols-1 divide-gray-300 md:grid-cols-5 md:divide-x h-full gap-10 md:gap-0", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2 justify-between items-center md:pr-5 px-0 h-full flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:space-y-2 w-full", children: settingsBlocks.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => setCurrentPage(index),
        className: `w-full cursor-pointer rounded-xl p-5 text-lg font-medium ${index === currentPage ? "bg-primary text-light-700" : ""}`,
        children: item.title
      },
      index
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "col-span-3 md:px-10 relative p-5 md:p-0", children: settingsBlocks[currentPage].component })
  ] }) });
}
function ModalSettingsWrapper({
  children,
  asChild = false
}) {
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    asChild ? /* @__PURE__ */ jsx(DialogTrigger, { asChild, children: /* @__PURE__ */ jsx(Button$1, { className: "flex flex-row gap-5 cursor-pointer my-3 rounded-lg text-sm text-center py-6 md:px-7 text-white", children }) }) : /* @__PURE__ */ jsx(DialogTrigger, { children }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "md:max-w-fit bg-white", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { className: "hidden", children: "Настройки" }),
        /* @__PURE__ */ jsx(DialogDescription, {})
      ] }),
      /* @__PURE__ */ jsx(Settings, {})
    ] })
  ] });
}
function Index() {
  const title = "Ваш профиль";
  const { auth } = usePage().props;
  const company = auth.user.company;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-20 px-5 my-10 md:my-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:hidden space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center space-x-5", children: [
          /* @__PURE__ */ jsx(ModalSettingsWrapper, { children: /* @__PURE__ */ jsx(ProfileAvatar, { className: "size-32", image: company.image_path }) }),
          /* @__PURE__ */ jsx("h3", { className: "truncate", children: auth.user.login })
        ] }),
        /* @__PURE__ */ jsxs(ModalSettingsWrapper, { asChild: true, children: [
          /* @__PURE__ */ jsx(SettingsIcon, {}),
          " Настройки"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-col md:flex-row justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "", children: title }),
        /* @__PURE__ */ jsxs(ModalSettingsWrapper, { asChild: true, children: [
          /* @__PURE__ */ jsx(SettingsIcon, {}),
          " Настройки"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid min-h-[30vh] grid-cols-1 divide-gray-300 md:grid-cols-3 md:divide-x", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-col justify-center items-center space-y-7", children: [
          /* @__PURE__ */ jsx(ModalSettingsWrapper, { children: /* @__PURE__ */ jsx(ProfileAvatar, { className: "size-36", image: company.image_path }) }),
          /* @__PURE__ */ jsx("h3", { className: "", children: auth.user.login })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2 justify-center items-center bg-light-xl md:bg-transparent py-10 rounded-2xl md:rounded-none", children: /* @__PURE__ */ jsx(ProfileStats, { company }) })
      ] }),
      /* @__PURE__ */ jsx(CompanyInvestmentsTable, { company, title: "Ваши вклады" })
    ] })
  ] });
}
export {
  Index as default
};
