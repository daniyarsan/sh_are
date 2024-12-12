import { toast, Slide } from "react-toastify";
const defaultToastOptions = {
  position: "top-right",
  autoClose: 3e3,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: void 0,
  theme: "colored",
  transition: Slide
};
const showToast = (type, content, options) => {
  const optionsToApply = { ...defaultToastOptions, ...options };
  switch (type) {
    case "success":
      return toast.success(content, optionsToApply);
    case "error":
      return toast.error(content, optionsToApply);
    case "info":
      return toast.info(content, optionsToApply);
    case "warning":
      return toast.warn(content, optionsToApply);
    case "default":
      return toast(content, optionsToApply);
    default:
      return toast(content, optionsToApply);
  }
};
export {
  showToast as s
};
