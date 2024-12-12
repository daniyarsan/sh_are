import { jsxs, jsx } from "react/jsx-runtime";
import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/react";
function CompanyInvestmentsTable({
  company,
  title,
  dark = false
}) {
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
        background: dark ? "#F9F9F9" : "#fff"
      }
    },
    pagination: {
      style: {
        background: dark ? "#F9F9F9" : "#fff"
      }
    },
    rows: {
      style: {
        background: dark ? "#F9F9F9" : "#fff",
        fontFamily: "TT Firs Neue",
        fontSize: "16px",
        minHeight: "72px"
        // override the row height
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
    /* @__PURE__ */ jsx("h3", { children: title }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        pagination: true,
        columns,
        defaultSortFieldId: "created",
        defaultSortAsc: false,
        data: company.investments,
        customStyles
      }
    )
  ] });
}
export {
  CompanyInvestmentsTable as C
};
