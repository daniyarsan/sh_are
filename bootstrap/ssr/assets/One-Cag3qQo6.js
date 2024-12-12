import { jsxs, jsx } from "react/jsx-runtime";
import { M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { B as BackButton } from "./BackButton-ClbFh9i4.js";
import { Head } from "@inertiajs/react";
import { W as Wallet } from "./Wallet-BEJbzx5y.js";
import { C as CompanyInvestmentsTable } from "./CompanyInvestmentsTable-EOvDjZxX.js";
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
import "react-data-table-component";
function One({ company }) {
  const title = company.name;
  const wallet = company.address;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-20 px-5", children: [
      /* @__PURE__ */ jsx("div", { className: "md:mx-auto", children: /* @__PURE__ */ jsx(BackButton, { className: "my-10 block cursor-pointer text-gray-500", children: `< Назад` }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center space-y-10 justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8/12 md:w-3/12", children: company.image_path && /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full",
            src: `/storage/images/${company.image_path}`,
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:w-8/12 md:gap-4 space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-5", children: [
            /* @__PURE__ */ jsx("h1", { className: "", children: company.name }),
            /* @__PURE__ */ jsx("span", { className: "text-primary text-2xl", children: "/ №1" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "", children: company.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 bg-gray-200 rounded-2xl p-10 divide-y md:divide-y-0 md:divide-x divide-gray-400", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col py-7 md:px-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-primary text-xl", children: company.invested.formatted }),
          /* @__PURE__ */ jsx("div", { children: "Всего пожертвовано" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col py-7 md:px-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-primary text-xl", children: company.created_at }),
          /* @__PURE__ */ jsx("div", { children: "Дата вступления в Лигу" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col py-7 md:px-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-primary text-xl", children: wallet && /* @__PURE__ */ jsx(Wallet, { wallet }) }),
          /* @__PURE__ */ jsx("div", { children: "Благотворительный кошелек" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CompanyInvestmentsTable, { company })
    ] })
  ] });
}
export {
  One as default
};
