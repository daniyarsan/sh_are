import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useContext, useState, useEffect } from "react";
import clsx from "clsx";
import { P as ParamsContext } from "../app.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-DPipvyZ_.js";
function PlayIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      id: "play",
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" })
    }
  );
}
function Progressbar({ timer, percentage }) {
  const progressRef = useRef(null);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: progressRef,
      className: "w-[60%] absolute z-50 bottom-[10%] flex flex-row items-center gap-5",
      children: [
        /* @__PURE__ */ jsx("div", { className: "cursor-pointer h-2 bg-neutral-200 dark:bg-neutral-600 rounded-2xl flex-1 w-[100%] relative", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-2 bg-primary absolute",
            style: { width: percentage + "%" }
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "text-white w-2/12 text-sm text-center", children: timer })
      ]
    }
  );
}
function VideoPlayer({ url, autoplay = false }) {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error("ParamsContext must be used within a ParamsProvider");
  }
  const { setLoading } = context;
  const videoElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();
  const [timer, setTimer] = useState("");
  const [percentage, setPercentage] = useState(0);
  const playOrPause = () => {
    if (!videoElement.current) return;
    if (videoElement.current.paused) {
      videoElement.current.play();
    } else {
      videoElement.current.pause();
    }
  };
  useEffect(() => {
    setLoading(true);
    if (autoplay) {
      playOrPause();
    }
    const togglePlay = (e) => {
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        playOrPause();
      }
    };
    window.addEventListener("keydown", togglePlay);
    return () => {
      window.removeEventListener("keydown", togglePlay);
    };
  }, [autoplay]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex justify-center", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        onLoadedData: () => {
          setLoading(false);
          if (videoElement.current) {
            setCurrentVideo(videoElement.current);
          }
        },
        ref: videoElement,
        onPlay: () => setIsPlaying(true),
        onPause: () => setIsPlaying(false),
        onTimeUpdate: () => {
          if (!videoElement.current) return;
          const current = videoElement.current.currentTime;
          const duration = videoElement.current.duration;
          const currentMinutes = Math.floor(current / 60);
          const currentSeconds = Math.floor(current % 60);
          const durationMinutes = Math.floor(duration / 60);
          const durationSeconds = Math.floor(duration % 60);
          setTimer(
            `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}/${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`
          );
          setPercentage(current / duration * 100);
        },
        preload: "auto",
        playsInline: true,
        onClick: playOrPause,
        className: "rounded-2xl max-h-[90vh] z-50",
        children: /* @__PURE__ */ jsx("source", { src: url, type: "video/mp4" })
      }
    ),
    currentVideo && /* @__PURE__ */ jsx(Progressbar, { timer, percentage }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx({
          hidden: isPlaying,
          "absolute-center z-50": !isPlaying
        }),
        onClick: playOrPause,
        children: /* @__PURE__ */ jsx(PlayIcon, { className: "fill-light-800 mx-auto size-[40%] cursor-pointer drop-shadow-4xl opacity-90" })
      }
    )
  ] });
}
function VideoPreview({ video }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative h-[200px]", children: [
    video.preview_path && /* @__PURE__ */ jsx(
      "img",
      {
        className: "h-full w-full object-cover rounded-2xl",
        src: `/storage/videos/thumb/${video.preview_path}`
      }
    ),
    /* @__PURE__ */ jsxs(Dialog, { children: [
      /* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx("span", { className: "absolute-center z-10 size-25 bg-dark-900 opacity-80 hover:opacity-100 rounded-full flex justify-center items-center p-5 cursor-pointer", children: /* @__PURE__ */ jsx("img", { src: `/assets/icons/play.svg`, alt: "", className: "w-5" }) }) }),
      /* @__PURE__ */ jsxs(DialogContent, { className: "md:max-w-fit border-0 shadow-none", children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { className: "hidden", children: "Настройки" }),
          /* @__PURE__ */ jsx(DialogDescription, { className: "hidden" })
        ] }),
        /* @__PURE__ */ jsx(
          VideoPlayer,
          {
            url: `/storage/videos/${video.filepath}`,
            autoplay: true
          }
        )
      ] })
    ] })
  ] });
}
export {
  VideoPreview as V
};
