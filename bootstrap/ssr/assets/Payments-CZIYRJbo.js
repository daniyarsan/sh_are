import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { usePage, Head } from "@inertiajs/react";
import * as React from "react";
import { useEffect, useState, Suspense } from "react";
import { T as Tabs } from "./Tabs-DdnxRCRx.js";
import { a as useGetDataPlain } from "./useGetData-CnfvNlIJ.js";
import { B as BASE_API_URL } from "./const-VN1vlzxL.js";
import { c as cn } from "../app.js";
import { C as ClipboardCopy } from "./ClipboardCopy-C4AoPiPI.js";
import { C as Copy } from "./Copy-CYK3e0xO.js";
import { S as Skeleton } from "./skeleton-mi0LeAO0.js";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
import "axios";
import "react-dom/client";
import "clsx";
import "tailwind-merge";
import "react-copy-to-clipboard";
import "./showToast-B-PmT2yu.js";
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
function PaymentThread({ status, fallback }) {
  const params = {};
  if (status) {
    params.status = status;
  }
  const response = useGetDataPlain(
    `${BASE_API_URL}/investments/profile?${new URLSearchParams(params).toString()}`
  );
  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);
  return response && /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-5/12 ", children: "Проект" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-5/12 text-right", children: "Адрес" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-2/12 text-right", children: "Создан" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: response.map((item, index) => {
      return /* @__PURE__ */ jsxs(TableRow, { className: "h-14", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: item.project.name }),
        /* @__PURE__ */ jsxs(TableCell, { className: "text-right gap-5 flex flex-row justify-end", children: [
          item.paymentAddress,
          item.paymentAddress && /* @__PURE__ */ jsx(ClipboardCopy, { text: item.paymentAddress, children: /* @__PURE__ */ jsx(Copy, { className: "inline size-[15px] cursor-pointer fill-primary" }) })
        ] }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: item.created_at })
      ] }, index);
    }) })
  ] });
}
function PaymentThreadLoading() {
  return /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-5/12", children: "Проект" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-5/12 text-right", children: "Адрес" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-2/12 text-right", children: "Создан" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: /* @__PURE__ */ jsxs(TableRow, { className: "h-14", children: [
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }) }),
      /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4" }) }),
      /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4" }) })
    ] }) })
  ] });
}
function PaymentWidget() {
  const { ziggy: query } = usePage().props;
  const [response, setResponse] = useState();
  const [status, setStatus] = useState(
    query.query.status ? query.query.status : "new"
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: /* @__PURE__ */ jsx(
      Tabs,
      {
        current: status,
        options: [
          { label: "Новые", value: "new" },
          { label: "Оплаченные", value: "completed" },
          { label: "Отмененные", value: "canceled" }
        ],
        onChange: (value) => {
          const url = new URL(location.toString());
          if (!value) {
            url.searchParams.delete("status");
            history.pushState({}, "", url);
            setStatus("new");
            return;
          }
          url.searchParams.set("status", value == null ? void 0 : value.toString());
          history.pushState({}, "", url);
          setStatus(value.toString());
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PaymentThreadLoading, {}), children: /* @__PURE__ */ jsx(
      PaymentThread,
      {
        status,
        fallback: (response2) => {
          setResponse(response2);
        }
      }
    ) })
  ] });
}
function Payments() {
  const title = "Ваши платежи";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-10 px-5 my-10 md:my-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 space-y-10", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:w-8/12", children: "На странице представлена история ваших платежей, а так же активные платежи и история отмененных." })
      ] }),
      /* @__PURE__ */ jsx(PaymentWidget, {})
    ] })
  ] });
}
export {
  Payments as default
};
