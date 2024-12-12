import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { B as Button, M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { usePage, useForm as useForm$1, Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { F as FormField, a as FormItem, b as FormLabel, c as FormControl, d as FormMessage, I as InvestmentSchema, e as Form } from "./form-DvJ9gCwN.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { I as InputField } from "./InputField-BuY5ii2G.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectGroup, e as SelectItem } from "./select-DSL7ZOI_.js";
import { c as cn } from "../app.js";
import { a as fetchProjectOptions, b as fetchInvestments } from "./api-DkN1mmSf.js";
import DataTable from "react-data-table-component";
import { A as Animate, f as funds } from "./Animate-Qeg0hltR.js";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
import "zod";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "axios";
import "react-dom/client";
import "clsx";
import "tailwind-merge";
import "./const-VN1vlzxL.js";
import "react-lottie";
function SelectField({
  label,
  name,
  options,
  placeholder,
  control,
  handleSelectChange,
  dark
}) {
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control,
      name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { className: "text-xs leading-6 text-gray-400 flex flex-row items-center gap-3", children: label }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(
            Select,
            {
              onValueChange: (e) => {
                field.onChange(e);
                if (handleSelectChange) {
                  handleSelectChange(e);
                }
              },
              defaultValue: field.value,
              children: [
                /* @__PURE__ */ jsx(
                  SelectTrigger,
                  {
                    ref: field.ref,
                    className: cn(
                      "border-0 relative bg-transparent border-b border-gray-400 rounded-none p-0 text-2lg text-gray-500 placeholder:text-gray-400 sm:text-md sm:leading-6",
                      dark ? "text-light-600" : ""
                    ),
                    children: /* @__PURE__ */ jsx(SelectValue, { placeholder: placeholder || "Выбрать..." })
                  }
                ),
                /* @__PURE__ */ jsx(SelectContent, { className: "bg-transparent border-0 bg-white", children: /* @__PURE__ */ jsx(SelectGroup, { className: "p-0", children: options.map((item) => /* @__PURE__ */ jsx(
                  SelectItem,
                  {
                    value: item.value.toString(),
                    className: "cursor-pointer focus:bg-light-600",
                    children: item.label
                  },
                  item.value
                )) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { className: "text-xs text-red-400" })
        ] });
      }
    }
  );
}
function InvestmentForm({
  handleProjectsChange
}) {
  const { csrf_token } = usePage().props;
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjectOptions().then((resp) => {
      setProjects(resp);
    });
  }, []);
  const form = useForm({
    resolver: zodResolver(InvestmentSchema),
    defaultValues: {
      project: "",
      contact: "",
      _token: csrf_token
    }
  });
  const { setData, post, data } = useForm$1({
    project: "",
    contact: "",
    _token: csrf_token
  });
  const formValues = form.watch();
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("investment.store"));
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsx("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ jsx(
      SelectField,
      {
        handleSelectChange: handleProjectsChange,
        options: projects,
        label: "Project",
        placeholder: "Select...",
        name: "project",
        control: form.control,
        dark: true
      }
    ),
    /* @__PURE__ */ jsx(
      InputField,
      {
        label: "Email",
        placeholder: "Email",
        name: "contact",
        control: form.control,
        dark: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "md:w-4/12", children: /* @__PURE__ */ jsx(Button, { className: "hover:bg-dark-800", children: "Pay" }) })
  ] }) }) });
}
function InvestmetRequestFormWidget({
  currentProject
}) {
  const [tableOptions, setTableOptions] = useState([]);
  const [project, setProject] = useState(currentProject.id);
  useEffect(() => {
    fetchInvestments({ project }).then((data) => {
      setTableOptions(data);
    });
  }, [project]);
  const handleProjectsChange = (value) => {
    setProject(Number(value));
  };
  const columns = [
    {
      id: "project",
      name: "Subject",
      selector: (row) => row.project.name,
      sortable: true,
      width: "35%",
      cell: (cell) => {
        const link = cell.project.custom_url ? cell.project.custom_url : `project/${cell.project.slug}`;
        return /* @__PURE__ */ jsx(Link, { href: link, children: cell.project.name });
      }
    },
    {
      id: "company",
      name: "Sender",
      selector: (row) => row.company.name,
      sortable: true,
      width: "20%",
      cell: (cell) => {
        return /* @__PURE__ */ jsx(Link, { href: `/company/${cell.company.slug}`, children: cell.company.slug });
      }
    },
    {
      id: "amount",
      name: "Amount",
      selector: (row) => row.amount.formatted,
      sortable: true
    },
    {
      id: "created",
      name: "Date",
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-primary border-gray-700 p-10 rounded-2xl w-full flex flex-col md:flex-row gap-16", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-6/12", children: /* @__PURE__ */ jsx(InvestmentForm, { handleProjectsChange }) }),
      /* @__PURE__ */ jsx("div", { className: "md:w-6/12 hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "bg-dark-700 flex flex-col items-center rounded-2xl p-10 text-white", children: /* @__PURE__ */ jsx(Animate, { data: funds }) }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        pagination: true,
        columns,
        data: tableOptions,
        customStyles,
        defaultSortFieldId: "created",
        defaultSortAsc: false
      }
    )
  ] });
}
function Index({ currentProject }) {
  const title = "Contribute";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-[4em] px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 space-y-10", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:w-8/12", children: "You can choose the amount to donate, select the subject to support, and provide details about the sender if desired." })
      ] }),
      /* @__PURE__ */ jsx(InvestmetRequestFormWidget, { currentProject })
    ] })
  ] });
}
export {
  Index as default
};
