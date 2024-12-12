import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { a as ButtonLink, M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { C as ClipboardCopy } from "./ClipboardCopy-C4AoPiPI.js";
import { C as Copy } from "./Copy-CYK3e0xO.js";
import { D as Dot, B as BannerMobile, P as ProjectProgress } from "./BannerMobile-CXFIbvgC.js";
import { Link, Head } from "@inertiajs/react";
import { S as StatsWidget } from "./StatsWidget-C6IrZf9Q.js";
import { C as CallToAction } from "./CallToAction-IN11OQ3O.js";
import { P as ProjectCard } from "./ProjectCard-B-hc9IdZ.js";
import { B as Banner, V as VoteButton } from "./Banner-BhaNY4Gg.js";
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
import "./Animate-Qeg0hltR.js";
import "react-lottie";
const Jumbotron = ({ title, description }) => {
  return /* @__PURE__ */ jsxs("section", { className: "text-default", children: [
    /* @__PURE__ */ jsx("h1", { children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "items-center justify-center py-7 text-lg", children: description })
  ] });
};
function CompanyProgress({
  company,
  dark = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col py-5", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden h-10 md:flex", children: company == null ? void 0 : company.shares.map((share, index) => {
      return /* @__PURE__ */ jsxs("div", { style: { width: `${share.percentage}%` }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-full text-center text-xs", children: /* @__PURE__ */ jsxs("div", { className: "w-[100%] overflow-hidden text-ellipsis text-nowrap", children: [
          share.industry.name,
          " • ",
          share.amount.short
        ] }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `h-4 rounded-full border-t-[1px] ${dark ? "border-white" : "border-default"} dark:bg-gray-700`
          }
        )
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex justify-end text-xs font-light md:hidden",
        style: { width: `100%` },
        children: /* @__PURE__ */ jsx("div", { className: "translate-x-5 text-nowrap", children: company.invested.short })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `w-full ${dark ? "bg-shadow" : "bg-gray-300"} mb-3 mt-2 h-2.5 rounded-full dark:bg-gray-700 md:mt-0`,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `${dark ? "bg-white" : "bg-shadow"} relative flex h-2.5 items-center rounded-full dark:bg-white`,
            style: {
              width: `100%`
            },
            children: /* @__PURE__ */ jsx(
              Dot,
              {
                className: "absolute right-0 size-5 translate-x-3",
                active: dark
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-2 flex flex-row text-xs font-light", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute flex w-full flex-row justify-between", children: /* @__PURE__ */ jsx("div", { className: "", children: "0 ₽" }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute hidden justify-end md:flex",
          style: { width: `100%` },
          children: /* @__PURE__ */ jsx("div", { className: "translate-x-5 text-nowrap", children: company.invested["short"] })
        }
      )
    ] })
  ] });
}
function RatingBlock({ companies }) {
  return companies.map((company) => {
    const wallet = company.address;
    return /* @__PURE__ */ jsxs("div", { className: "mt-10 flex justify-center items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-3/12", children: [
        /* @__PURE__ */ jsx(Link, { href: `/company/${company.slug}`, children: /* @__PURE__ */ jsx("h3", { className: "text-[28px]", children: company.name }) }),
        wallet && /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-extralight", children: `${wallet == null ? void 0 : wallet.substring(0, 20)}...${wallet == null ? void 0 : wallet.substring(wallet.length - 5, wallet.length)}` }),
          /* @__PURE__ */ jsx(ClipboardCopy, { text: wallet, children: /* @__PURE__ */ jsx(Copy, { className: "inline size-[15px] cursor-pointer" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-9/12", children: /* @__PURE__ */ jsx(CompanyProgress, { company }) })
    ] }, company.id);
  });
}
function CompanyProgressMobile({
  company
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-[2em]", children: [
    /* @__PURE__ */ jsx("div", { className: "my-3 grid grid-cols-3", children: company == null ? void 0 : company.shares.map((share, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "m-2 flex flex-col items-center justify-center rounded-[20px] bg-slate-100 p-3",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-[40px]",
                src: `/assets/icons/industry${share.industry.id}.svg`
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-4 text-center text-sm font-light", children: share.amount.short })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsx(StatsWidget, { subText: "Всего пожертвовано", children: company.invested["formatted"] })
  ] });
}
function RatingBlockMobile({
  companies
}) {
  return companies.map((company) => {
    const wallet = company == null ? void 0 : company.address;
    return /* @__PURE__ */ jsxs("div", { className: "my-5 flex flex-col py-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-2 flex flex-row flex-wrap items-center justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[28px]", children: company.name }),
        wallet && /* @__PURE__ */ jsxs("p", { className: "flex flex-row", children: [
          /* @__PURE__ */ jsxs("span", { className: "mr-2 text-ellipsis", children: [
            `${wallet == null ? void 0 : wallet.substring(0, 20)}...${wallet == null ? void 0 : wallet.substring(wallet.length - 5, wallet.length)}`,
            " "
          ] }),
          wallet && /* @__PURE__ */ jsx(ClipboardCopy, { text: wallet, children: /* @__PURE__ */ jsx(Copy, { className: "inline size-3 cursor-pointer" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CompanyProgressMobile, { company })
    ] }, company.id);
  });
}
function Rating({ companies }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(RatingBlock, { companies }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col divide-y-2 md:hidden", children: /* @__PURE__ */ jsx(RatingBlockMobile, { companies }) })
  ] });
}
const VoteCard = ({ project }) => {
  return /* @__PURE__ */ jsxs("section", { className: "relative flex flex-col justify-between space-y-[2em] rounded-2xl bg-gray-100 p-7", children: [
    /* @__PURE__ */ jsx("div", { className: "w-10/12 md:w-auto", children: /* @__PURE__ */ jsx("h3", { children: project == null ? void 0 : project.name }) }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(Link, { href: `project/${project.slug}`, children: [
      project.image_path && /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(Banner, { image: `/storage/images/${project.image_path}` }) }),
      project.mobile_image_path && /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(BannerMobile, { image: `/storage/images/${project.image_path}` }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "my-6 text-sm", children: [
      "Требуется собрать • ",
      /* @__PURE__ */ jsx("span", { children: project.cost.formatted })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:space-x-5", children: [
      /* @__PURE__ */ jsx(
        ButtonLink,
        {
          href: `/project/${project.slug}`,
          className: "bg-dark-900 text-white",
          children: "Read more"
        }
      ),
      /* @__PURE__ */ jsx(VoteButton, { project })
    ] })
  ] });
};
function IndustryBlock({
  industries
}) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Areas" }),
    /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "sm:grid md:divide-x xl:grid-cols-4", children: industries.map((industry, index) => {
      if (industry.hidden) {
        return null;
      }
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "mt-10 flex flex-col xs:px-2 md:mt-0 md:px-10 mb-10",
          children: [
            /* @__PURE__ */ jsx("div", { className: "grow", children: /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
              /* @__PURE__ */ jsx("h3", { className: "py-5 text-[24px] font-medium text-default", children: industry.name }),
              /* @__PURE__ */ jsx("ul", { role: "list", className: "space-y-2 divide-y", children: industry.categories.map((category) => {
                return /* @__PURE__ */ jsx("li", { className: "py-3", children: /* @__PURE__ */ jsx("span", { className: "text-base text-slate-700", children: category.name }) }, category.id);
              }) })
            ] }) }, industry.id),
            /* @__PURE__ */ jsx(StatsWidget, { subText: "Всего пожертвовано", children: industry.invested.formatted })
          ]
        },
        index
      );
    }) }) }) })
  ] });
}
function FeaturedCard({ project }) {
  var _a;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `w-full bg-primary text-white flex flex-col justify-between space-y-[2em] p-8`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(Link, { href: `project/${project.slug}`, children: [
          project.image_path && /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(Banner, { image: `/storage/images/${project.image_path}` }) }),
          project.mobile_image_path && /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(
            BannerMobile,
            {
              image: `/storage/images/${project.mobile_image_path}`
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("h3", { className: "mt-4", children: project == null ? void 0 : project.name }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between gap-10", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ jsx(ProjectProgress, { unlim: true, featured: true, project }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full md:w-6/12 bg-primaryLight rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-10 justify-around", children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: project && ((_a = project.invested) == null ? void 0 : _a.short) && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs", children: "Цель выполнена" }),
                /* @__PURE__ */ jsx("div", { className: "text-lg", children: /* @__PURE__ */ jsx("span", { children: project.invested.short }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs", children: project.done_text }),
                /* @__PURE__ */ jsxs("div", { className: "text-lg", children: [
                  /* @__PURE__ */ jsx("span", { children: project.done_value }),
                  " ",
                  /* @__PURE__ */ jsx("img", { className: "inline mb-1", src: "/assets/icons/man.svg" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              ButtonLink,
              {
                href: project.custom_url ? project.custom_url : `project/${project.slug}`,
                className: "bg-dark-900 text-white",
                children: "Read more"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const main = "/build/assets/main-C97Prp9f.svg";
function Home({
  companies,
  featuredProject,
  finishedProject,
  currentProjects,
  newProjects,
  industries
}) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Главная" }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-[6em] py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-around md:flex-row md:justify-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full px-5 md:w-6/12 md:pr-10", children: /* @__PURE__ */ jsx(
          Jumbotron,
          {
            title: "Sh_are",
            description: "We connect passionate individuals and organizations to bring impactful projects to life. Whether you're raising funds for a cause, supporting a dream, or driving change in your community, every contribution counts"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden md:w-6/12", children: /* @__PURE__ */ jsx("img", { src: main }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-[6em] px-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h1", { className: "pb-10", children: "Done:" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsx(FeaturedCard, { project: featuredProject }),
            /* @__PURE__ */ jsx(FeaturedCard, { project: finishedProject })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-9/12", children: /* @__PURE__ */ jsx(
          Jumbotron,
          {
            title: "Make Your Impact: Vote for the Next Project to Join the Queue",
            description: "Voting will automatically close once the current project reaches its fundraising goal."
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2", children: newProjects.map((project) => {
          return /* @__PURE__ */ jsx(VoteCard, { project }, project.id);
        }) }),
        currentProjects.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "w-full md:w-9/12", children: /* @__PURE__ */ jsx(
            Jumbotron,
            {
              title: "Charity Crowdfunding Projects",
              description: "We connect passionate individuals and organizations to bring impactful projects to life. Whether you\\'re raising funds for a cause, supporting a dream, or driving change in your community, every contribution counts."
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-1 gap-4 md:grid-cols-2", children: currentProjects.map((project) => {
            return /* @__PURE__ */ jsx(ProjectCard, { project }, project.id);
          }) })
        ] }),
        /* @__PURE__ */ jsx(Rating, { companies }),
        /* @__PURE__ */ jsx(
          CallToAction,
          {
            text: "Join us in supporting impactful projects. Contribute.",
            href: route("investment.index"),
            buttonText: "Support"
          }
        ),
        /* @__PURE__ */ jsx(IndustryBlock, { industries })
      ] })
    ] })
  ] });
}
export {
  Home as default
};
