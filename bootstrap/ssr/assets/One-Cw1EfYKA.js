import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { B as BackButton } from "./BackButton-ClbFh9i4.js";
import { P as ProjectProgress, A as ActiveIndicator, B as BannerMobile } from "./BannerMobile-CXFIbvgC.js";
import { B as Banner, V as VoteButton } from "./Banner-BhaNY4Gg.js";
import { Link, Head } from "@inertiajs/react";
import { C as CallToAction } from "./CallToAction-IN11OQ3O.js";
import DataTable from "react-data-table-component";
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
import "./showToast-B-PmT2yu.js";
import "./Animate-Qeg0hltR.js";
import "react-lottie";
function InvestingIndicator({
  heading,
  project,
  featured
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `w-full ${featured ? "bg-primary" : "bg-gray-100"} relative rounded-2xl p-7 ${featured ? "text-white" : ""} flex flex-col space-y-[1em]`,
      children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: heading }),
        /* @__PURE__ */ jsx(ProjectProgress, { project, featured })
      ]
    }
  );
}
function ProjectInvestmentsTable({
  project,
  title
}) {
  const columns = [
    {
      id: "company",
      name: "Отправитель",
      selector: (row) => row.company.name,
      sortable: true,
      width: "20%",
      cell: (cell) => {
        return /* @__PURE__ */ jsx(Link, { href: `/company/${cell.company.slug}`, children: cell.company.name });
      }
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
    rows: {
      style: {
        fontFamily: "TT Firs Neue",
        fontSize: "16px",
        minHeight: "72px"
        // override the row height
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
    /* @__PURE__ */ jsx("h2", { children: title }),
    project.investments.length > 0 && /* @__PURE__ */ jsx(
      DataTable,
      {
        pagination: true,
        columns,
        defaultSortFieldId: "created",
        defaultSortAsc: false,
        data: project.investments,
        customStyles
      }
    )
  ] });
}
function One({ project }) {
  const title = project.name;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-10 px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:mx-auto md:w-9/12", children: [
        /* @__PURE__ */ jsx(BackButton, { className: "my-10 block cursor-pointer text-gray-500", children: `< Назад` }),
        /* @__PURE__ */ jsx("h1", { children: project.name }),
        /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(
          ActiveIndicator,
          {
            className: "inline-block rounded-full px-4 py-2 text-sm text-white",
            status: project.status
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-10 md:my-20", children: [
        project.image_path && /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(Banner, { image: `/storage/images/${project.image_path}` }) }),
        project.mobile_image_path && /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(BannerMobile, { image: `/storage/images/${project.image_path}` }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-16 md:m-auto md:w-9/12", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "space-y-12",
            dangerouslySetInnerHTML: { __html: project.content }
          }
        ),
        project.new && !project.finished && /* @__PURE__ */ jsx("div", { className: "md:w-6/12 m-auto", children: /* @__PURE__ */ jsx(VoteButton, { project }) }),
        !project.new && !project.finished && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
          CallToAction,
          {
            text: "Вступайте в ряды Выдающихся Джентльменов. Поддержите данный проект Лиги.",
            href: route("investment.index", project.slug),
            buttonText: "Поддержать"
          }
        ) }),
        /* @__PURE__ */ jsx(
          InvestingIndicator,
          {
            heading: project.finished ? "Собрано всего:" : "Собрано на данный момент:",
            project,
            featured: true
          }
        ),
        /* @__PURE__ */ jsx(ProjectInvestmentsTable, { project })
      ] })
    ] })
  ] });
}
export {
  One as default
};
