"use client";
import styles from "../../app/Main.module.css";

function MainSection() {
  return (
    <>
      <main
        className={
          " flex h-screen w-screen  items-center justify-center bg-brand_bg-500 text-brand_main-500"
        }
      >
        <div className="container flex flex-col items-center justify-center h-full">
          <div className="flex flex-col justify-start textContainer">
            <p>Hi, I&apos;m</p>
            <p className={styles.gradientText}>Themuuln</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainSection;
