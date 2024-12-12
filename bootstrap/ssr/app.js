import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { createContext, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const formatNoun = (value, one, two, five) => {
  let n = Math.abs(value);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};
function number_format(number, decimals, dec_point, thousands_sep) {
  const n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = thousands_sep, dec = dec_point, toFixedFix = function(n2, prec2) {
    const k = Math.pow(10, prec2);
    return Math.round(n2 * k) / k;
  }, s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}
function generateRandomString(length = 10) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}
const ParamsContext = createContext(
  void 0
);
const ParamsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const voteIdentifierKey = "voteIdentifier";
  let voteIdentifier = localStorage.getItem(voteIdentifierKey);
  if (!voteIdentifier) {
    voteIdentifier = generateRandomString(16);
    localStorage.setItem(voteIdentifierKey, voteIdentifier);
  }
  return /* @__PURE__ */ jsx(ParamsContext.Provider, { value: { voteIdentifier, loading, setLoading }, children });
};
const ModalContext = createContext(
  void 0
);
const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modal, setModal] = useState();
  const openModal = (modal2) => {
    setModal(modal2);
    setModalOpened(true);
    document.body.classList.add("overflow-y-hidden");
  };
  const closeModal = () => {
    setModal(false);
    setModalOpened(false);
    document.body.classList.remove("overflow-y-hidden");
  };
  return /* @__PURE__ */ jsx(
    ModalContext.Provider,
    {
      value: { modal, modalOpened, openModal, closeModal },
      children
    }
  );
};
const appName = "Crowdfunding";
function MainWrapper({ children }) {
  return /* @__PURE__ */ jsx("div", { className: `flex min-h-screen flex-col`, children });
}
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./pages/${name}.tsx`,
    /* @__PURE__ */ Object.assign({ "./pages/apply/Index.tsx": () => import("./assets/Index-DFlGGoHF.js"), "./pages/auth/Login.tsx": () => import("./assets/Login-DLE-JlCh.js"), "./pages/auth/OtpCheck.tsx": () => import("./assets/OtpCheck-ZDjvw0Ru.js"), "./pages/auth/Register.tsx": () => import("./assets/Register-CPcGbDko.js"), "./pages/case/Index.tsx": () => import("./assets/Index-CuyKBu-K.js"), "./pages/case/One.tsx": () => import("./assets/One-BBNS0nuy.js"), "./pages/company/Index.tsx": () => import("./assets/Index-CJrN6qvA.js"), "./pages/company/One.tsx": () => import("./assets/One-Cag3qQo6.js"), "./pages/donator/Index.tsx": () => import("./assets/Index-_4Uj47Xl.js"), "./pages/donator/One.tsx": () => import("./assets/One-DtNtn9Dh.js"), "./pages/investment/Index.tsx": () => import("./assets/Index-D54BJ6rl.js"), "./pages/main/About.tsx": () => import("./assets/About-CV9F5HxP.js"), "./pages/main/Home.tsx": () => import("./assets/Home-CDak5muE.js"), "./pages/main/Rating.tsx": () => import("./assets/Rating-5riYmdvL.js"), "./pages/profile/Index.tsx": () => import("./assets/Index-aV5lbDG8.js"), "./pages/profile/Payments.tsx": () => import("./assets/Payments-CZIYRJbo.js"), "./pages/project/Index.tsx": () => import("./assets/Index-DHsq067t.js"), "./pages/project/One.tsx": () => import("./assets/One-Cw1EfYKA.js"), "./pages/token/Index.tsx": () => import("./assets/Index-BrwjU-G9.js"), "./pages/twoFactor/Index.tsx": () => import("./assets/Index-CYLNWokc.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsx(MainWrapper, { children: /* @__PURE__ */ jsx(ParamsProvider, { children: /* @__PURE__ */ jsx(ModalProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) }) }) })
    );
  },
  progress: {
    color: "#4B5563"
  }
});
export {
  ParamsContext as P,
  cn as c,
  formatNoun as f,
  number_format as n
};
