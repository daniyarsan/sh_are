import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { B as Button, M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { Link, usePage, Head } from "@inertiajs/react";
import { useState, useEffect, Suspense } from "react";
import { u as useGetData } from "./useGetData-CnfvNlIJ.js";
import { B as BASE_API_URL } from "./const-VN1vlzxL.js";
import { c as cn, f as formatNoun } from "../app.js";
import { S as StatsWidget } from "./StatsWidget-C6IrZf9Q.js";
import DataTable from "react-data-table-component";
import { S as Skeleton } from "./skeleton-mi0LeAO0.js";
import { T as Tabs } from "./Tabs-DdnxRCRx.js";
import { S as SelectFilter } from "./SelectFilter-BAK4ifTF.js";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
import "axios";
import "react-dom/client";
import "clsx";
import "tailwind-merge";
import "./select-DSL7ZOI_.js";
import "@radix-ui/react-select";
function DonatorInvestmentTable({ donator }) {
  const columns = [
    {
      id: "project",
      name: "Название проекта",
      selector: (row) => row.project.name,
      sortable: true,
      width: "50%",
      cell: (cell) => {
        const link = cell.project.custom_url ? cell.project.custom_url : `/project/${cell.project.slug}`;
        return /* @__PURE__ */ jsx(Link, { href: link, children: cell.project.name });
      }
    },
    {
      id: "industry",
      name: "Направление",
      selector: (row) => row.project.industry.name,
      sortable: true
    },
    {
      id: "amount",
      name: "Сумма пожертвования",
      selector: (row) => row.amount.formatted,
      sortable: true
    },
    {
      id: "created",
      name: "Дата",
      selector: (row) => row.created_at,
      sortable: true
    }
  ];
  const customStyles = {
    headRow: {
      style: {
        background: void 0
      }
    },
    pagination: {
      style: {
        background: void 0
      }
    },
    rows: {
      style: {
        background: void 0,
        fontFamily: "TT Firs Neue",
        fontSize: "16px",
        minHeight: "72px"
        // override the row height
      }
    }
  };
  return /* @__PURE__ */ jsx(
    DataTable,
    {
      pagination: true,
      columns,
      defaultSortFieldId: "created",
      defaultSortAsc: false,
      data: donator.investments,
      customStyles
    }
  );
}
function ProfilePlaceholder() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "50px",
      height: "50px",
      viewBox: "0 0 50 50",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Path" }),
        /* @__PURE__ */ jsx(
          "g",
          {
            id: "Page-1",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: /* @__PURE__ */ jsx(
              "g",
              {
                id: "Рейтинг-донатеров",
                transform: "translate(-186.000000, -1297.000000)",
                fill: "#CFCFCF",
                fillRule: "nonzero",
                children: /* @__PURE__ */ jsx("g", { id: "Group-3-Copy-3", transform: "translate(40.000000, 1252.000000)", children: /* @__PURE__ */ jsx(
                  "g",
                  {
                    id: "suit-club-fill-svgrepo-com",
                    transform: "translate(146.000000, 45.000000)",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M0,30.0693505 C0,36.4461384 4.98680386,41.38207 11.3262682,41.38207 C14.8541408,41.38207 18.461575,40.2081654 20.0265507,37.086481 L20.2918315,37.086481 C20.2918315,40.6350605 16.4191165,43.5699357 14.8541408,45.2241256 C12.9443227,47.225182 14.1114904,50 16.5782397,50 L33.4218734,50 C35.86214,50 37.0293076,47.225182 35.1194895,45.2241256 C33.5544007,43.5699357 29.6817988,40.6350605 29.6817988,37.086481 L29.9735625,37.086481 C31.5119422,40.2081654 35.1459723,41.38207 38.647249,41.38207 C44.9868265,41.38207 50,36.4461384 50,30.0693505 C50,23.6659244 45.1725457,18.2497074 38.8329682,18.2497074 C36.4191844,18.2497074 33.9258391,19.0768593 31.9629422,20.6242686 C35.2520168,17.929593 36.4191844,14.5410707 36.4191844,11.4994149 C36.4191844,5.12274087 31.2998533,0 24.9867586,0 C18.700373,0 13.5809288,5.12274087 13.5809288,11.4994149 C13.5809288,14.5410707 14.7215004,17.929593 18.0106882,20.6242686 C16.0743873,19.0768593 13.5544459,18.2497074 11.140549,18.2497074 C4.80108466,18.2497074 0,23.6659244 0,30.0693505 Z",
                        id: "Path"
                      }
                    )
                  }
                ) })
              }
            )
          }
        )
      ]
    }
  );
}
function ChevronDown() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-chevron-down",
      children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
    }
  );
}
function ChevronUp() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-chevron-up",
      children: /* @__PURE__ */ jsx("polyline", { points: "18 15 12 9 6 15" })
    }
  );
}
function DonatorCard({
  id,
  donator,
  highlighted = false
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row bg-light-800 rounded-3xl mb-5 overflow-hidden min-h-[140px]", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "md:flex w-1/12 min-h-full justify-center items-center hidden",
            highlighted ? "bg-primary text-white" : "bg-light-600"
          ),
          children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: id })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-1 flex-col md:flex-row justify-around py-10 md:py-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:w-6/12 flex flex-col md:flex-row h-full items-center gap-5 px-10 md:px-10", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center bg-light-600 rounded-full md:size-[100px] size-[134px]", children: /* @__PURE__ */ jsx(ProfilePlaceholder, {}) }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-2xl truncate text-center md:text-left w-[300px]", children: donator.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-5 md:mt-0 flex flex-col md:flex-row items-center justify-end divide-y md:divide-y-0 divide-gray-300 md:divide-x px-6 md:px-0", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full py-5 md:px-6 md:py-0", children: /* @__PURE__ */ jsx(
            StatsWidget,
            {
              subText: `Всего пожертвовано`,
              subTextSize: "md",
              children: `${donator.invested.formatted}`
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "w-full py-5 md:px-6 md:py-0", children: /* @__PURE__ */ jsx(
            StatsWidget,
            {
              subText: `Проспонсировано`,
              subTextSize: "md",
              children: `${donator.projectsCount} ${formatNoun(donator.projectsCount, "проект", "проекта", "проектов")}`
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-[170px] md:flex justify-center items-center hidden", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setOpen(!open);
          },
          className: "size-[68px] rounded-full bg-light-600 flex items-center justify-center",
          children: open ? /* @__PURE__ */ jsx(ChevronDown, {}) : /* @__PURE__ */ jsx(ChevronUp, {})
        }
      ) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            setOpen(!open);
          },
          className: "flex md:hidden justify-center items-center bg-light-600 py-5 flex gap-3",
          children: [
            "Список пожертвований ",
            open ? /* @__PURE__ */ jsx(ChevronDown, {}) : /* @__PURE__ */ jsx(ChevronUp, {})
          ]
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "p-10", children: /* @__PURE__ */ jsx(DonatorInvestmentTable, { donator }) })
  ] });
}
function DonatorThread({
  page,
  order,
  period,
  fallback
}) {
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
    `${BASE_API_URL}/donators?${new URLSearchParams(params).toString()}`
  );
  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);
  return response && response.data.map((item, index) => {
    const id = index + 1;
    return /* @__PURE__ */ jsx(DonatorCard, { id, donator: item, highlighted: id === 1 }, id);
  });
}
function DonatorCardLoading() {
  return /* @__PURE__ */ jsx(Skeleton, { className: "w-full min-h-[140px] mb-5 rounded-3xl" });
}
function DonatorThreadLoading() {
  return [1, 2, 3, 4].map((ind) => {
    return /* @__PURE__ */ jsx(DonatorCardLoading, {}, ind);
  });
}
function DonatorsThreadWidget() {
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
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(DonatorThreadLoading, {}), children: /* @__PURE__ */ jsx(
      DonatorThread,
      {
        page,
        order,
        period: Number(period),
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
  const title = "Рейтинг меценатов";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-[5em] px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 space-y-10", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:w-8/12", children: "На данной странице представлен ТОП частных добродетелей, активно жертвующих средства в проекты Лиги." })
      ] }),
      /* @__PURE__ */ jsx(DonatorsThreadWidget, {})
    ] })
  ] });
}
export {
  Index as default
};
