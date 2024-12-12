import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useContext } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import { c as cn, P as ParamsContext } from "../app.js";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { ToastContainer } from "react-toastify";
import { LoaderCircle } from "lucide-react";
const logo = "/build/assets/logo-DV5tnv9S.png";
function ProfileAvatar({ image, className, ...props }) {
  const avatarClass = cn(
    "rounded-full bg-gray-200 cursor-pointer flex items-center justify-center overflow-hidden",
    className
  );
  return /* @__PURE__ */ jsx("div", { ...props, className: avatarClass, children: image != null ? /* @__PURE__ */ jsx("img", { src: `/storage/images/companies/${image}`, alt: "avatar" }) : /* @__PURE__ */ jsx("img", { src: "/assets/icons/avatar_placeholder.svg", alt: "avatar" }) });
}
function MenuIcon() {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 92 92", id: "menu", children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#FE5B62",
      d: "M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"
    }
  ) });
}
function MenuItem({ active, text, href }) {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    Link,
    {
      href,
      className: `mobile-menu-item md:menu-item ${active && "mobile-menu-item-active"}`,
      "aria-current": "page",
      children: text
    }
  ) });
}
const TopMenu = () => {
  const { menu } = usePage().props;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `border-1 hidden w-auto items-center justify-between md:flex`,
      children: /* @__PURE__ */ jsx("ul", { className: "flex flex-row space-x-8 rounded-lg  p-4 text-sm", children: menu.map((item, index) => {
        return /* @__PURE__ */ jsx(MenuItem, { text: item.text, href: item.href }, index);
      }) })
    }
  );
};
function Close(props) {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ jsx("path", { d: "M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z" }) });
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-dark-900 text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button$1 = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button$1.displayName = "Button";
function ButtonLink({
  children,
  href,
  method,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(motion.div, { whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsx(Link, { method, href, children: /* @__PURE__ */ jsx(
    Button$1,
    {
      ...props,
      className: cn(
        "flex flex-row gap-5 mx-auto cursor-pointer my-3 rounded-lg w-full text-sm text-center py-6 md:px-7 text-white",
        className
      ),
      children
    }
  ) }) });
}
function Button({
  children,
  className,
  asChild = false,
  ...props
}) {
  return /* @__PURE__ */ jsx(motion.div, { whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsx(
    Button$1,
    {
      ...props,
      asChild,
      className: cn(
        "flex flex-row gap-5 mx-auto cursor-pointer my-3 rounded-lg w-full text-sm text-center py-6 md:px-7 text-white",
        className
      ),
      children
    }
  ) });
}
const SideMenu = ({ toggle, isOpen }) => {
  const { auth, menu } = usePage().props;
  const { post } = useForm();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${isOpen ? "" : "translate-x-full "}fixed right-0 z-10 flex h-screen w-9/12 flex-col py-10 border-l-2 bg-white p-5 duration-500 md:hidden`,
      children: [
        /* @__PURE__ */ jsx(
          Close,
          {
            onClick: () => {
              toggle();
            },
            className: "absolute right-5 top-5 w-10 fill-primary"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: "border-b border-gray-200 w-full pb-10 text-center", children: auth.user ? /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/profile",
            className: "text-primary text-lg  items-center flex flex-row",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-4/12", children: /* @__PURE__ */ jsx(
                ProfileAvatar,
                {
                  className: "size-20",
                  image: auth.user.company.image_path
                }
              ) }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: auth.user.login })
            ]
          }
        ) : /* @__PURE__ */ jsx(ButtonLink, { href: "/login", children: "Enter" }) }),
        /* @__PURE__ */ jsx("ul", { className: "mt-10 text-lg flex-1", children: menu.map((item, index) => {
          return /* @__PURE__ */ jsx(MenuItem, { text: item.text, href: item.href }, index);
        }) }),
        auth.user && /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              post(route("logout"));
            },
            children: "Выйти"
          }
        )
      ]
    }
  ) });
};
function DropdownProfile({
  children,
  menuList
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => {
          toggle();
        },
        className: "cursor-pointer",
        children
      }
    ),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600", children: [
      /* @__PURE__ */ jsx("ul", { className: "py-2 text-sm text-gray-700 dark:text-gray-200", children: menuList.map((item, index) => {
        return /* @__PURE__ */ jsx(
          Link,
          {
            className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
            href: item.href,
            children: item.text
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("span", { className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "block w-full text-left text-sm",
          children: "Выход"
        }
      ) }) })
    ] })
  ] });
}
function Header() {
  const { auth, origin } = usePage().props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4", children: [
      /* @__PURE__ */ jsx(Link, { className: "md:hidden", href: "/", children: /* @__PURE__ */ jsx("img", { className: "h-12 fill-primary", src: logo, alt: "logo" }) }),
      /* @__PURE__ */ jsx(Link, { className: "hidden md:block", href: "/", children: /* @__PURE__ */ jsx("img", { className: "h-12 fill-primary ", src: logo, alt: "logo" }) }),
      /* @__PURE__ */ jsx(TopMenu, {}),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-3 md:hidden rtl:space-x-reverse", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            toggle();
          },
          "data-collapse-toggle": "navbar-sticky",
          type: "button",
          className: "z-10 size-12 items-center justify-center rounded-lg p-2 hover:bg-gray-100 md:hidden",
          "aria-controls": "navbar-sticky",
          "aria-expanded": "false",
          children: /* @__PURE__ */ jsx(MenuIcon, {})
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: auth.user ? /* @__PURE__ */ jsx(
        DropdownProfile,
        {
          menuList: [
            { href: "/profile", text: "Профиль" },
            { href: "/investment/payments", text: "Платежи" }
          ],
          children: /* @__PURE__ */ jsxs("div", { className: "text-primary text-md items-center md:flex flex-row justify-between gap-5 hidden", children: [
            auth.user.company.image_path && /* @__PURE__ */ jsx(
              ProfileAvatar,
              {
                className: "size-10",
                image: auth.user.company.image_path
              }
            ),
            auth.user.login
          ] })
        }
      ) : /* @__PURE__ */ jsx(ButtonLink, { href: "/login", children: "Enter" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(SideMenu, { toggle, isOpen })
  ] });
}
function FooterMobile1() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-auto bg-dark-900 text-white md:hidden", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row p-3 text-xs", children: [
    /* @__PURE__ */ jsx("div", { className: "w-7/12", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx("img", { className: "h-12 fill-primary", src: logo, alt: "logo" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex w-5/12 justify-center", children: /* @__PURE__ */ jsx("div", { className: "mt-auto flex flex-row gap-3" }) })
  ] }) }) });
}
function Footer() {
  const { menu } = usePage().props;
  return /* @__PURE__ */ jsx("footer", { className: "mt-auto hidden bg-dark-900 text-white md:block", children: /* @__PURE__ */ jsx("div", { className: "m-auto max-w-screen-xl", children: /* @__PURE__ */ jsxs("div", { className: "grid min-h-[30vh] grid-cols-1 divide-y divide-gray-700 md:grid-cols-3 md:divide-x", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-start justify-start py-10 pl-5 md:col-span-1", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx("img", { className: "h-[60px] fill-white", src: logo, alt: "" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "leading-12 grid grid-cols-1 items-start justify-end py-10 pl-5 md:col-span-2 md:grid-cols-2 md:p-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { children: "Menu" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 text-xs", children: menu.map((item, index) => {
          return /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: "mb-5 transition hover:opacity-75",
              children: item.text
            },
            index
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6 md:items-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "opacity-0", children: "Menu" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 items-end text-xs" })
      ] })
    ] })
  ] }) }) });
}
function ToastProvider({
  children
}) {
  const contextClass = {
    success: "bg-primary",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-dark-700",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(
      ToastContainer,
      {
        toastClassName: (context) => contextClass[(context == null ? void 0 : context.type) || "default"] + " flex flex-row justify-between cursor-pointer p-3",
        bodyClassName: () => "flex flex-row justify-around  font-white block p-2"
      }
    )
  ] });
}
function AlertError({ errors }) {
  return Object.values(errors).map((item, index) => {
    return /* @__PURE__ */ jsx(ErrorBlock, { message: item }, index);
  });
}
function ErrorBlock({ message }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center p-4 mb-4 text-sm text-pink-800 border border-pink-300 rounded-lg bg-pink-50 dark:bg-gray-800 dark:text-pink-300 dark:border-pink-800",
      role: "alert",
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "flex-shrink-0 inline w-4 h-4 me-3",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Info" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Проблема! " }),
          message
        ] })
      ]
    }
  );
}
function AlertSuccess({ message }) {
  return message ? /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
      role: "alert",
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "flex-shrink-0 inline w-4 h-4 me-3",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Info" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Успешно!" }),
          " ",
          message,
          "."
        ] })
      ]
    }
  ) : null;
}
function Loader() {
  return /* @__PURE__ */ jsx("div", { className: "fixed w-full h-screen z-50 bg-opacity-70 bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(LoaderCircle, { className: "size-20 animate-spin-slow fill-primary drop-shadow" }) });
}
function MainLayout({
  children
}) {
  const { errors, success } = usePage().props;
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error("ParamsContext must be used within a ParamsProvider");
  }
  const { loading, setLoading } = context;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    loading && /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "global-style mx-auto w-full max-w-screen-xl py-10", children: [
      /* @__PURE__ */ jsx(AlertError, { errors }),
      /* @__PURE__ */ jsx(AlertSuccess, { message: success }),
      /* @__PURE__ */ jsx(ToastProvider, { children })
    ] }),
    /* @__PURE__ */ jsx(FooterMobile1, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AlertError as A,
  Button as B,
  MainLayout as M,
  ProfileAvatar as P,
  ButtonLink as a,
  AlertSuccess as b,
  Button$1 as c
};
