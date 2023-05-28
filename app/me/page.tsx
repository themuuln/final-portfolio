"use client";
const MbtiSection = require("@/components/main/Mbti/MbtiSection").default;
const SetupSection = require("@/components/me/config/SetupSection").default;

const Themuuln = () => {
  return (
    <>
      <div className="noise-container">
        <div className="noise"></div>
        <MbtiSection />
        <SetupSection />
      </div>
    </>
  );
};

export default Themuuln;
