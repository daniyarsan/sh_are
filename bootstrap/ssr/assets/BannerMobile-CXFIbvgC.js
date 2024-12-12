import { jsx, jsxs } from "react/jsx-runtime";
import clsx from "clsx";
function Dot({ active = false, ...props }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsx(
    "circle",
    {
      cx: 659,
      cy: 7,
      r: 5,
      transform: "translate(-722 -844) translate(70 844)",
      stroke: `${active ? "#FFF" : "#126154"}`,
      strokeWidth: 4,
      fill: `${active ? "#126154" : "#FFF"}`,
      fillRule: "evenodd"
    }
  ) });
}
function ProjectProgress({
  project,
  unlim = false,
  featured = false
}) {
  var _a, _b;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col py-5", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden h-10 md:block", children: ((_a = project == null ? void 0 : project.shares) == null ? void 0 : _a.length) > 0 && project.investedPercentage > 20 && project.shares && project.shares.map((share, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          style: { width: `${share.percentage}%`, float: "left" },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center text-xs overflow-hidden text-ellipsis text-nowrap", children: [
              share.company_name,
              " • ",
              share.invested.short
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx(
                  {
                    "border-white": featured,
                    "border-dark-700": !featured
                  },
                  "h-4 rounded-full border-t-[1px]"
                )
              }
            )
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex justify-end text-xs font-light md:hidden",
        style: { width: `${project.investedPercentage}%` },
        children: /* @__PURE__ */ jsx("div", { className: "translate-x-5 text-nowrap", children: project.investedPercentage > 20 && project.invested.short })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          {
            "bg-shadow": featured,
            "bg-gray-300": !featured
          },
          "w-full mb-3 mt-2 h-2.5 rounded-full dark:bg-gray-700 md:mt-0"
        ),
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx(
              {
                "bg-white": featured,
                "bg-shadow": !featured
              },
              "relative flex h-2.5 items-center rounded-full dark:bg-white"
            ),
            style: {
              width: `${project.investedPercentage}%`
            },
            children: /* @__PURE__ */ jsx(
              Dot,
              {
                className: "absolute right-0 size-5 translate-x-3",
                active: featured
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-2 flex flex-row text-xs font-light", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute flex w-full flex-row justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "", children: "0 ₽" }),
        /* @__PURE__ */ jsx("div", { className: "", children: unlim ? project.investedPercentage < 80 && /* @__PURE__ */ jsx("span", { className: "text-xl", children: "∞" }) : project.investedPercentage < 80 && ((_b = project.cost) == null ? void 0 : _b.short) })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute hidden justify-end md:flex",
          style: { width: `${project.investedPercentage}%` },
          children: /* @__PURE__ */ jsx("div", { className: "translate-x-5 text-nowrap", children: project.investedPercentage > 20 && project.invested.short })
        }
      )
    ] })
  ] });
}
const statusSet = {
  new: { text: "● голосование", styles: "bg-blue-500" },
  active: { text: "● идут сборы", styles: "bg-gray-500" },
  finished: { text: "✔ завершено", styles: "bg-primary" }
};
function ActiveIndicator({
  status,
  className
}) {
  const style = clsx(
    className,
    statusSet[status].styles,
    statusSet[status].styles ? "text-secondary" : "text-white",
    "m-2"
  );
  return /* @__PURE__ */ jsx("div", { className: style, children: statusSet[status].text });
}
function BannerMobile({ image }) {
  return /* @__PURE__ */ jsx("div", { className: "block overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx("img", { src: image, className: "w-full", alt: "mobile" }) });
}
export {
  ActiveIndicator as A,
  BannerMobile as B,
  Dot as D,
  ProjectProgress as P
};
