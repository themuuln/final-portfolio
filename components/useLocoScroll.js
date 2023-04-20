import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function useLocoScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });
  }, []);
}

export default useLocoScroll;
