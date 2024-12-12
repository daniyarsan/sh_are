import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { B as Button, a as ButtonLink, M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { usePage, useForm as useForm$1, Head } from "@inertiajs/react";
import * as React from "react";
import { useEffect, useRef, useState, Suspense } from "react";
import { F as FormField, a as FormItem, b as FormLabel, c as FormControl, d as FormMessage, A as ApplySchema, e as Form } from "./form-DvJ9gCwN.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { I as InputField } from "./InputField-BuY5ii2G.js";
import { c as cn } from "../app.js";
import { u as useGetData } from "./useGetData-CnfvNlIJ.js";
import { B as BASE_API_URL } from "./const-VN1vlzxL.js";
import ReactSlick from "react-slick";
import { f as fetchApplicationsTotalInvested } from "./api-DkN1mmSf.js";
import { C as CaseCardLoading } from "./CaseCardLoading-B-1xZGFS.js";
import "framer-motion";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-toastify";
import "lucide-react";
import "zod";
import "@radix-ui/react-label";
import "axios";
import "react-dom/client";
import "clsx";
import "tailwind-merge";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
function TextareaField({
  label,
  placeholder,
  name,
  dark,
  control
}) {
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control,
      name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { className: "text-xs leading-6 text-gray-400 flex flex-row items-center gap-3", children: label }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Textarea,
            {
              ...field,
              className: cn(
                "bg-transparent border-0 border-b border-gray-400 rounded-none focus:outline-none focus-visible:ring-0 p-0 text-2lg text-gray-500 placeholder:text-gray-400 sm:text-md sm:leading-6",
                dark ? "text-light-700" : ""
              ),
              placeholder
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, { className: "text-xs text-red-400" })
        ] });
      }
    }
  );
}
function ApplyForm() {
  const { csrf_token } = usePage().props;
  const form = useForm({
    resolver: zodResolver(ApplySchema),
    defaultValues: {
      name: "",
      username: "",
      story_request: "",
      _token: csrf_token
    }
  });
  const { setData, post, data, wasSuccessful } = useForm$1({
    name: "",
    username: "",
    story_request: "",
    _token: csrf_token
  });
  const formValues = form.watch();
  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);
  function onSubmit() {
    post(route("application.store"), {
      onStart: () => {
      },
      onSuccess: () => {
        form.reset();
      }
    });
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Name",
          placeholder: "",
          name: "name",
          control: form.control
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Email",
          placeholder: "",
          name: "username",
          control: form.control
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-6", children: /* @__PURE__ */ jsx(
        TextareaField,
        {
          label: "Description",
          placeholder: "",
          name: "story_request",
          control: form.control
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Button, { className: "bg-dark-900 text-white", children: "Send" })
  ] }) });
}
function ApplyFormWidget() {
  return /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "bg-light-600 border border-gray-700 p-10 top-[10%] w-[90%] mx-auto", children: /* @__PURE__ */ jsx(ApplyForm, {}) }) });
}
function CaseSliderCard({
  application
}) {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-gray-100 rounded-2xl p-7 space-y-5 mb-5 min-h-[500px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-lg font-medium", children: application.story_title }),
      /* @__PURE__ */ jsx("p", { className: "text-md font-light", children: application.story_brief && ((_a = application.story_brief) == null ? void 0 : _a.substring(0, 240)) + "..." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "font-semibold text-primary text-sm uppercase", children: [
      "Пожертвовано: ",
      application.invested.formatted
    ] }),
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
function ArrowLeft(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "10px",
      height: "9px",
      viewBox: "0 0 10 9",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M33.297 28.5l-9-4.5v9l9-4.5z",
          transform: "translate(-1025 -1220) translate(1003 1196) matrix(-1 0 0 1 55.782 0)",
          fill: "#13171E",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1
        }
      )
    }
  );
}
function ArrowRight(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "10px",
      height: "9px",
      viewBox: "0 0 10 9",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M33.297 28.5l-9-4.5v9l9-4.5z",
          transform: "translate(-1098 -1220) translate(1074 1196)",
          fill: "#13171E",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1
        }
      )
    }
  );
}
function Slider({ slidesToShow, children }) {
  const sliderRef = useRef(null);
  const next = () => {
    var _a;
    (_a = sliderRef.current) == null ? void 0 : _a.slickNext();
  };
  const previous = () => {
    var _a;
    (_a = sliderRef.current) == null ? void 0 : _a.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "slider-container space-y-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-row justify-end gap-4", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: previous,
          className: "size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer",
          children: /* @__PURE__ */ jsx(ArrowLeft, {})
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: next,
          className: "size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer",
          children: /* @__PURE__ */ jsx(ArrowRight, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx(ReactSlick, { ref: sliderRef, ...settings, ...settings, children }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden flex flex-row justify-center gap-4", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: previous,
          className: "size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer",
          children: /* @__PURE__ */ jsx(ArrowLeft, {})
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: next,
          className: "size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer",
          children: /* @__PURE__ */ jsx(ArrowRight, {})
        }
      )
    ] })
  ] });
}
function CaseInvestedCounter() {
  const [invested, setInvested] = useState(0);
  useEffect(() => {
    fetchApplicationsTotalInvested().then(({ formatted }) => {
      setInvested(formatted);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full md:block hidden",
        src: "/storage/images/bottombrace.svg",
        alt: ""
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center border-t-2 border-gray-600 py-5 md:border-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-[1em] text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl", children: invested }),
      /* @__PURE__ */ jsx("span", { className: "text-md", children: "Total" })
    ] }) })
  ] });
}
function CaseSlider() {
  const response = useGetData(`${BASE_API_URL}/applications`);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    response && /* @__PURE__ */ jsx(
      Slider,
      {
        slidesToShow: response.data.length > 3 ? 3 : response.data.length,
        children: response.data.map((item, index) => {
          return /* @__PURE__ */ jsx("div", { className: "p-5", children: /* @__PURE__ */ jsx(CaseSliderCard, { application: item }) }, index);
        })
      }
    ),
    /* @__PURE__ */ jsx(CaseInvestedCounter, {})
  ] });
}
function CaseCarouselLoading() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-10 w-full", children: [1, 2, 3].map((_, index) => {
    return /* @__PURE__ */ jsx(CaseCardLoading, {}, index);
  }) });
}
function CaseCarouselWidget() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
    /* @__PURE__ */ jsx("h2", { children: "Cases" }),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(CaseCarouselLoading, {}), children: /* @__PURE__ */ jsx(CaseSlider, {}) })
  ] });
}
function Index() {
  const title = "Help desk";
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-[6em] px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-10 md:my-20 space-y-10", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:w-8/12", children: "You are experiencing troubles. Please write message." })
      ] }),
      /* @__PURE__ */ jsx(ApplyFormWidget, {}),
      /* @__PURE__ */ jsx(CaseCarouselWidget, {})
    ] })
  ] });
}
export {
  Index as default
};
