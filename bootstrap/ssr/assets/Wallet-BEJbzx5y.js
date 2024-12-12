import { jsxs, jsx } from "react/jsx-runtime";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { s as showToast } from "./showToast-B-PmT2yu.js";
function Wallet({ wallet, ...props }) {
  return /* @__PURE__ */ jsxs("span", { ...props, children: [
    `${wallet.slice(0, 6)}......${wallet.slice(-8, -1)}`,
    /* @__PURE__ */ jsx(
      CopyToClipboard,
      {
        text: wallet,
        onCopy: () => {
          showToast("success", /* @__PURE__ */ jsx("span", { children: "Скопировано" }));
        },
        children: /* @__PURE__ */ jsx(ClipboardIcon, { className: "inline cursor-pointer" })
      }
    )
  ] });
}
function ClipboardIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "23px",
      height: "22px",
      viewBox: "0 0 23 22",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10.7 3a2.2 2.2 0 00-2.2 2.2v2.2h2.2V5.2h12.1v12.1h-2.2v2.2h2.2a2.2 2.2 0 002.2-2.2V5.2A2.2 2.2 0 0022.8 3H10.7zM5.2 8.5A2.2 2.2 0 003 10.7v12.1A2.2 2.2 0 005.2 25h12.1a2.2 2.2 0 002.2-2.2V10.7a2.2 2.2 0 00-2.2-2.2H5.2z",
          transform: "translate(-1033 -565) translate(40 542) translate(755.88 20) translate(235)",
          fill: "#126154",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1
        }
      )
    }
  );
}
export {
  Wallet as W
};
