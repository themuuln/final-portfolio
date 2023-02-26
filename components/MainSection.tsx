import { Transition } from "@headlessui/react";
import { useState } from "react";

function MainSection() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition show={isShowing}>I will appear and disappear.</Transition>
    </>
  );
}

export default MainSection;
