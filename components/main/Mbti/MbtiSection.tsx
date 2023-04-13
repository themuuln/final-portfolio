"use client";
import EntpAvatar from "./EntpAvatar";
import EntpStats from "./EntpStats";

const MbtiSection = () => {
  return (
    <>
      <section
        id="mbti"
        className="container flex justify-center min-h-screen place-items-center"
      >
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row xl:gap-20">
          <EntpAvatar />
          <EntpStats />
        </div>
      </section>
    </>
  );
};

export default MbtiSection;
