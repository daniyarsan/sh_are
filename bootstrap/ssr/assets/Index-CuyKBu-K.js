import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { a as ButtonLink, B as Button, M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { usePage, Head } from "@inertiajs/react";
import { useEffect, useState, Suspense } from "react";
import { T as Tabs } from "./Tabs-DdnxRCRx.js";
import { u as useGetData } from "./useGetData-CnfvNlIJ.js";
import { B as BASE_API_URL } from "./const-VN1vlzxL.js";
import { V as VideoPreview } from "./VideoPreview-v3MkPmRj.js";
import { C as CaseCardLoading } from "./CaseCardLoading-B-1xZGFS.js";
import { S as SelectFilter } from "./SelectFilter-BAK4ifTF.js";
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
import "./dialog-DPipvyZ_.js";
import "@radix-ui/react-dialog";
import "./select-DSL7ZOI_.js";
import "@radix-ui/react-select";
function CaseCard({
  application
}) {
  var _a, _b;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-gray-100 rounded-2xl p-7 space-y-5 mb-5", children: [
    application.videos.length > 0 && application.videos[0] && /* @__PURE__ */ jsx(VideoPreview, { video: application.videos[0] }),
    /* @__PURE__ */ jsx("div", { className: "text-lg font-medium h-[60px]", children: application.story_title }),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-medium uppercase mr-3", children: application.invested.formatted }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "/ пожертвовано" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-5", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-gray-200 rounded-lg px-2 justify-center py-1 text-md text-accent uppercase line-clamp-1 text-wrap", children: (_a = application == null ? void 0 : application.company) == null ? void 0 : _a.name }),
      /* @__PURE__ */ jsx("div", { className: "bg-gray-200 text-light-xs rounded-lg w-6/12 flex items-center justify-center py-1 font-semibold  text-xs", children: application.created_at })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 flex-1", children: /* @__PURE__ */ jsx("p", { className: "text-md font-light", children: application.story_brief && ((_b = application.story_brief) == null ? void 0 : _b.substring(0, 70)) + "..." }) }),
    /* @__PURE__ */ jsx(
      ButtonLink,
      {
        href: route("case.one", application.id.toString()),
        className: "bg-dark-900 text-white",
        children: "Read more"
      }
    )
  ] });
}
function CaseThread({ page, order, period, fallback }) {
  const params = {};
  if (order) {
    params.order = order;
  }
  if (page) {
    params.page = page.toString();
  }
  if (period) {
    params.period = period.toString();
  }
  const response = useGetData(
    `${BASE_API_URL}/applications?${new URLSearchParams(params).toString()}`
  );
  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);
  return response && response.data.map((item, index) => {
    return /* @__PURE__ */ jsx(CaseCard, { application: item }, index);
  });
}
function CaseThreadLoading() {
  return [1, 2, 3, 4, 5, 6].map((_, index) => {
    return /* @__PURE__ */ jsx(CaseCardLoading, {}, index);
  });
}
function CasesThreadWidget() {
  var _a;
  const { ziggy: query } = usePage().props;
  const [response, setResponse] = useState();
  const [page, setPage] = useState(
    query.query.page ? parseInt(query.query.page) : 1
  );
  const [order, setOrder] = useState(query.query.order || "desc");
  const [period, setPeriod] = useState(
    query.query.period ? parseInt(query.query.period) : null
  );
  function handlePageUpdate(page2) {
    setPage(page2);
    const url = new URL(location.toString());
    url.searchParams.set("page", page2.toString());
    history.pushState({}, "", url);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsx(
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
      ),
      /* @__PURE__ */ jsx("div", { className: "filters grid grid-cols-1 gap-3", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-5 justify-end", children: /* @__PURE__ */ jsx(
        SelectFilter,
        {
          label: "Сортировка",
          options: [
            { label: "По возрастанию", value: "asc" },
            { label: "По убыванию", value: "desc" }
          ],
          defaultValue: order,
          onChange: (value) => {
            const url = new URL(location.toString());
            url.searchParams.set("order", value);
            history.pushState({}, "", url);
            setOrder(value);
          }
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(CaseThreadLoading, {}), children: /* @__PURE__ */ jsx(
      CaseThread,
      {
        page,
        order,
        period,
        fallback: (response2) => {
          setResponse(response2);
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "w-3/12", children: page > 1 && /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => handlePageUpdate(page > 1 ? page - 1 : 1),
          className: "bg-dark-900 text-white",
          children: "Назад"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "w-3/12", children: response && page < ((_a = response == null ? void 0 : response.meta) == null ? void 0 : _a.last_page) && /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => {
            if (response == null ? void 0 : response.meta.last_page) {
              handlePageUpdate(
                page < (response == null ? void 0 : response.meta.last_page) ? page + 1 : response == null ? void 0 : response.meta.last_page
              );
            }
          },
          className: "bg-dark-900 text-white",
          children: "Далее..."
        }
      ) })
    ] })
  ] });
}
function Index() {
  const title = "Помощь обычным людям";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-[5em] px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 space-y-10", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg md:w-8/12", children: [
          "Счастье – это притча, а несчастье – история ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "(с) Харуки Мураками" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CasesThreadWidget, {})
    ] })
  ] });
}
export {
  Index as default
};
