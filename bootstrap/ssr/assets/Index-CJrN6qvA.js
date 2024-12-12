import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { P as ProfileAvatar, B as Button, M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { Link, usePage, Head } from "@inertiajs/react";
import { useState, useEffect, Suspense } from "react";
import { T as Tabs } from "./Tabs-DdnxRCRx.js";
import { u as useGetData } from "./useGetData-CnfvNlIJ.js";
import { B as BASE_API_URL } from "./const-VN1vlzxL.js";
import { W as Wallet } from "./Wallet-BEJbzx5y.js";
import { S as StatsWidget } from "./StatsWidget-C6IrZf9Q.js";
import { f as formatNoun } from "../app.js";
import { C as CompanyInvestmentsTable } from "./CompanyInvestmentsTable-EOvDjZxX.js";
import { S as Skeleton } from "./skeleton-mi0LeAO0.js";
import { C as CallToAction } from "./CallToAction-IN11OQ3O.js";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
import "axios";
import "react-copy-to-clipboard";
import "./showToast-B-PmT2yu.js";
import "clsx";
import "react-dom/client";
import "tailwind-merge";
import "react-data-table-component";
import "./Animate-Qeg0hltR.js";
import "react-lottie";
function CompanyStats({ company }) {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 divide-y md:divide-y-0", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(StatsWidget, { subTextSize: "md", subText: "Всего пожертвовано", children: company == null ? void 0 : company.invested["formatted"] }) }),
    /* @__PURE__ */ jsx("div", { className: "pt-5 md:p-0", children: /* @__PURE__ */ jsx(
      StatsWidget,
      {
        subTextSize: "md",
        subText: "Проспонсировано",
        children: `${company == null ? void 0 : company.projectsCount} ${formatNoun(company == null ? void 0 : company.projectsCount, "проект", "проекта", "проектов")}`
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "pt-5 md:p-0", children: /* @__PURE__ */ jsx(StatsWidget, { subTextSize: "md", subText: "Дата вступления в Лигу", children: company.created_at }) }),
    /* @__PURE__ */ jsx("div", { className: "pt-5 md:p-0", children: /* @__PURE__ */ jsx(StatsWidget, { subTextSize: "md", subText: "Благотворительный кошелек", children: company.address && /* @__PURE__ */ jsx(Wallet, { wallet: company.address }) }) })
  ] });
}
function CompanyCard({ company, index }) {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "bg-semiLight rounded-2xl py-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid min-h-[30vh] grid-cols-1 divide-gray-300 md:grid-cols-3 md:divide-x", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center md:text-center space-y-7 px-10", children: [
        /* @__PURE__ */ jsx(ProfileAvatar, { className: "size-36", image: company.image_path }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-end items-center w-8/12", children: [
          /* @__PURE__ */ jsx("h3", { className: "uppercase", children: /* @__PURE__ */ jsx(Link, { href: route("company.one", company.slug), children: company.name }) }),
          /* @__PURE__ */ jsxs("span", { className: "mx-5 text-md text-primary text-bold text-xl font-light", children: [
            "№ ",
            index
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: company.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col col-span-2 justify-center px-10 md:px-16 bg-light-xl md:bg-transparent py-10 rounded-2xl md:rounded-none space-y-10", children: [
        /* @__PURE__ */ jsx(CompanyStats, { company }),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              setOpened(!opened);
            },
            children: "Read more"
          }
        )
      ] })
    ] }),
    opened && /* @__PURE__ */ jsx("div", { className: "p-10", children: /* @__PURE__ */ jsx(CompanyInvestmentsTable, { company, dark: true }) })
  ] });
}
function CompanyThread({ page, period, fallback }) {
  const params = {};
  if (page) {
    params.page = page.toString();
  }
  if (period) {
    params.period = period.toString();
  }
  const response = useGetData(
    `${BASE_API_URL}/companies?${new URLSearchParams(params).toString()}`
  );
  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);
  return response && /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-10", children: response.data.map((item, index) => {
    return /* @__PURE__ */ jsx(CompanyCard, { index: index + 1, company: item }, index);
  }) });
}
function CompanyCardLoading() {
  return /* @__PURE__ */ jsx("div", { className: "bg-semiLight rounded-2xl py-10", children: /* @__PURE__ */ jsxs("div", { className: "grid min-h-[30vh] grid-cols-1 divide-gray-300 md:grid-cols-3 md:divide-x", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center md:text-center space-y-7 px-10", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "size-36 rounded-full" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 justify-end items-center w-8/12", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center col-span-2 px-10 md:px-16 bg-light-xl md:bg-transparent py-10 rounded-2xl md:rounded-none space-y-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "gap-5 flex flex-col", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }) })
    ] })
  ] }) });
}
function CompanyThreadLoading() {
  return [1].map((_, index) => {
    return /* @__PURE__ */ jsx(CompanyCardLoading, {}, index);
  });
}
function CompaniesRatingWidget() {
  const { ziggy: query } = usePage().props;
  const [response, setResponse] = useState();
  const [page, setPage] = useState(
    query.query.page ? parseInt(query.query.page) : 1
  );
  const [period, setPeriod] = useState(
    query.query.period ? parseInt(query.query.period) : null
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: /* @__PURE__ */ jsx(
      Tabs,
      {
        current: period,
        options: [
          { label: "All time", value: null },
          { label: "30 days", value: 30 },
          { label: "90 days", value: 90 },
          { label: "360 days", value: 360 }
        ],
        onChange: (value) => {
          const url = new URL(location.toString());
          if (value) {
            url.searchParams.set("period", value == null ? void 0 : value.toString());
            history.pushState({}, "", url);
          } else {
            url.searchParams.delete("period");
            history.pushState({}, "", url);
          }
          setPeriod(value);
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(CompanyThreadLoading, {}), children: /* @__PURE__ */ jsx(
      CompanyThread,
      {
        page,
        period,
        fallback: (response2) => {
          setResponse(response2);
        }
      }
    ) })
  ] });
}
function Index() {
  const title = "Rating";
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-[4em] px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 space-y-10", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:w-8/12", children: "Full list of people who share" })
      ] }),
      /* @__PURE__ */ jsx(CompaniesRatingWidget, {}),
      !auth.user && /* @__PURE__ */ jsx(
        CallToAction,
        {
          text: "Join us and be one, who support other people.",
          href: "/register",
          buttonText: "Register"
        }
      )
    ] })
  ] });
}
export {
  Index as default
};
