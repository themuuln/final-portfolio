"use client";
import EntpAvatar from "./EntpAvatar";
import EntpStats from "./EntpStats";

const MbtiSection = () => {
  return (
    <>
      <section
        id="mbti"
        className="container flex h-screen snap-center flex-col items-center justify-center gap-8 lg:flex-row xl:gap-20"
      >
        <EntpAvatar />
        <EntpStats />
      </section>
    </>
  );
};

export default MbtiSection;
