import { jsxs, jsx } from "react/jsx-runtime";
import { useContext, useState, useEffect } from "react";
import { B as Button } from "./MainLayout-C7F2wrkU.js";
import axios from "axios";
import { s as showToast } from "./showToast-B-PmT2yu.js";
import { n as number_format, f as formatNoun, P as ParamsContext } from "../app.js";
import clsx from "clsx";
const requester = axios.create({
  baseURL: "/api"
  // withCredentials: true
  // timeout: 60000,
  // xsrfCookieName: "XSRF-TOKEN",
  // xsrfHeaderName: "X-XSRF-TOKEN",
  // headers: {
  //     Accept: "application/json"
  // }
});
function VoteCounter({
  count,
  total,
  dark = false,
  className
}) {
  const style = clsx(className, dark ? "text-secondary" : "text-white", "m-2");
  return /* @__PURE__ */ jsxs("span", { className: style, children: [
    number_format(count, 0, ",", " "),
    total && ` / ${number_format(total, 0, ",", " ")}`,
    " ",
    formatNoun(count, "голосов", "голосов", "голосов")
  ] });
}
function VoteButton({ project }) {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error("ParamsContext must be used within a ParamsProvider");
  }
  const { voteIdentifier, setLoading } = context;
  const [votesCount, setVotesCount] = useState(project.votes.length);
  const [processing, setProcessing] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  useEffect(() => {
    setIsVoted(!!project.votes.find((vote) => vote.hash === voteIdentifier));
  }, []);
  const voteCreate = async () => {
    setProcessing(true);
    setLoading(true);
    try {
      requester.post("/vote", {
        project_id: project.id,
        hash: voteIdentifier
      }).then((data) => {
        showToast("success", /* @__PURE__ */ jsx("span", { children: "Vote counted" }));
        setProcessing(false);
        setIsVoted(!isVoted);
        setVotesCount(votesCount + 1);
        setLoading(false);
      });
    } catch (err) {
      showToast("warning", /* @__PURE__ */ jsx("span", { children: "Something wrong." }));
      setLoading(false);
    }
  };
  const voteRemove = async () => {
    setLoading(true);
    setProcessing(true);
    try {
      await requester.post("/unvote", {
        project_id: project.id,
        hash: voteIdentifier
      }).then(() => {
        showToast("warning", /* @__PURE__ */ jsx("span", { children: "Vote canceled" }));
        setProcessing(false);
        setIsVoted(!isVoted);
        setVotesCount(votesCount - 1);
        setLoading(false);
      });
    } catch (err) {
      showToast("warning", /* @__PURE__ */ jsx("span", { children: "Something wrong." }));
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-6/12", children: isVoted ? /* @__PURE__ */ jsx(
      Button,
      {
        className: "bg-gray-500",
        disabled: processing,
        onClick: voteRemove,
        children: "Спасибо"
      }
    ) : /* @__PURE__ */ jsx(Button, { className: "bg-primary text-white", onClick: voteCreate, children: "Голосовать" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-6/12 text-center", children: /* @__PURE__ */ jsx(
      VoteCounter,
      {
        className: "text-sm",
        count: votesCount,
        total: project.target_votes,
        dark: true
      }
    ) })
  ] });
}
function Banner({ image }) {
  return /* @__PURE__ */ jsx("div", { className: "block overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx("img", { src: image, className: "w-full", alt: "image" }) });
}
export {
  Banner as B,
  VoteButton as V
};
