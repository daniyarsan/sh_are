import { jsx } from "react/jsx-runtime";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { s as showToast } from "./showToast-B-PmT2yu.js";
const ClipboardCopy = ({ text, children }) => {
  return /* @__PURE__ */ jsx(
    CopyToClipboard,
    {
      text,
      onCopy: () => {
        showToast("success", /* @__PURE__ */ jsx("span", { children: "Скопировано" }));
      },
      children
    }
  );
};
export {
  ClipboardCopy as C
};
