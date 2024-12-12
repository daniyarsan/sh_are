import { jsx, jsxs } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { M as MainLayout, a as ButtonLink } from "./MainLayout-C7F2wrkU.js";
import { C as ClipboardCopy } from "./ClipboardCopy-C4AoPiPI.js";
import "react";
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
import "react-copy-to-clipboard";
import "./showToast-B-PmT2yu.js";
function CopyGreen(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "23px",
      height: "23px",
      viewBox: "0 0 23 23",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M254 17c-.811.011-1.298.058-1.691.259-.453.23-.82.597-1.05 1.05-.201.393-.248.88-.259 1.691m11-3c.811.011 1.298.058 1.691.259.453.23.82.597 1.05 1.05.201.393.248.88.259 1.691m0 10c-.01.81-.058 1.298-.259 1.691-.23.453-.597.82-1.05 1.05-.393.201-.88.248-1.691.259m3.5-9v2m-8.5-9h2m-10.8 21h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874c.218-.428.218-.988.218-2.108v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C257.48 24 256.92 24 255.8 24h-7.6c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C245 25.52 245 26.08 245 27.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.428.218.988.218 2.108.218z",
          transform: "translate(-689 -371) translate(445 355)",
          stroke: "#126154",
          strokeWidth: 2,
          fill: "none",
          fillRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function CopyToken({ toCopy, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 rounded-2xl p-6 flex flex-row justify-between", children: [
    children,
    /* @__PURE__ */ jsx(ClipboardCopy, { text: toCopy, children: /* @__PURE__ */ jsx(CopyGreen, { className: "cursor-pointer" }) })
  ] });
}
function Index({ restore_token }) {
  const title = "Токен восстановления";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("section", { className: "px-5", children: /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 md:w-4/12 flex-col m-auto items-center justify-center space-y-8", children: [
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: "2FA подключен успешно. Обязательно сохраните резервный ключ, чтобы восстановить аккаунт в случае утери устройства." }),
      /* @__PURE__ */ jsx(CopyToken, { toCopy: restore_token, children: restore_token }),
      /* @__PURE__ */ jsx(
        ButtonLink,
        {
          href: route("profile.index"),
          className: "bg-primary text-white w-full",
          children: "Готово"
        }
      )
    ] }) })
  ] });
}
export {
  Index as default
};
