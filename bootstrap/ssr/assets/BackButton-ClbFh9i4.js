import { jsx } from "react/jsx-runtime";
function BackButton({
  className,
  children
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      className,
      onClick: () => {
        window.history.back();
      },
      children
    }
  );
}
export {
  BackButton as B
};
