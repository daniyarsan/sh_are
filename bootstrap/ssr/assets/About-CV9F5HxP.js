import { jsx, jsxs } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { M as MainLayout } from "./MainLayout-C7F2wrkU.js";
import { B as BackButton } from "./BackButton-ClbFh9i4.js";
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
function IntroText({ children }) {
  return /* @__PURE__ */ jsx("p", { className: "text-md font-medium md:text-lg", children });
}
function Note({ children }) {
  return /* @__PURE__ */ jsx("p", { className: "border-l-4 border-l-primary px-5 text-md font-medium md:text-lg", children });
}
function Home() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "How It Works" }),
    /* @__PURE__ */ jsxs("section", { className: "px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 mt-5 md:mx-auto md:mb-10 md:w-9/12", children: [
        /* @__PURE__ */ jsx(BackButton, { className: "mb-10 block cursor-pointer text-gray-500", children: `< Back` }),
        /* @__PURE__ */ jsx("h1", { children: "How It Works?" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-[3em] md:m-auto md:w-9/12", children: [
        /* @__PURE__ */ jsx(IntroText, { children: "Our platform connects individuals and organizations with impactful projects. Whether you're supporting a cause, helping a dream come true, or driving change in your community, your contribution makes a difference. We give everyone the power to fund projects that matter." }),
        /* @__PURE__ */ jsx("h3", { children: "How does it work?" }),
        /* @__PURE__ */ jsx("p", { children: "Through socially responsible funding – you get to choose where your contributions go. You can support projects that align with your values, knowing that the funds raised are spent to create positive change in areas like healthcare, education, and sustainability." }),
        /* @__PURE__ */ jsx("h3", { children: "How to choose the right projects?" }),
        /* @__PURE__ */ jsx("p", { className: "text-md", children: "It's simple: the projects that make a difference are those that demonstrate transparency and commitment. You can find such projects on our platform, where we ensure that every donation is used effectively. We encourage you to support only those that make a real impact." }),
        /* @__PURE__ */ jsx(Note, { children: "All projects on our platform are verified and follow ethical guidelines, ensuring that every contribution counts towards meaningful progress." }),
        /* @__PURE__ */ jsx("p", { children: "You can track the progress of the projects in real-time, read reports on completed initiatives, and vote for future projects that need support." }),
        /* @__PURE__ */ jsx("h3", { children: "The power is in your hands." }),
        /* @__PURE__ */ jsx("p", { children: "This approach creates a unique ecosystem where individuals, businesses, and research communities collaborate to achieve a common goal—supporting projects that improve the quality of life and help protect the environment. By supporting these initiatives, you are making a difference and contributing to a brighter future." })
      ] })
    ] })
  ] });
}
export {
  Home as default
};
