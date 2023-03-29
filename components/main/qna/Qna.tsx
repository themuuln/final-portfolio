const Qna = () => {
  return (
    <>
      <div
        id="main"
        className="flex h-screen flex-col items-center justify-center "
      >
        <div className="container w-full space-y-8 md:flex md:justify-around ">
          <div className="space-y-10">
            <div className="mb-2 space-y-1">
              <h2 className={`question`}>
                WHAT I <span className="highlighted">DO?</span>
              </h2>
              <p className="answer ">
                I specialize in crafting bespoke websites that not only look
                stunning, but also function flawlessly to enhance your online
                presence, establish your brand identity, and increase your
                revenue streams. With my extensive experience and expertise in
                the latest web technologies, I create digital solutions that are
                tailored to meet your unique needs and objectives.
              </p>
            </div>
            <div className="mb-2 space-y-1">
              <h2 className={`question`}>
                WHY CHOOSE <span className="highlighted">ME?</span>
              </h2>
              <p className="answer ">
                I am dedicated to delivering exceptional results that exceed
                your expectations. Whether it&apos;s revamping your existing
                website or building one from scratch, I work closely with you to
                understand your vision, goals, and audience, and collaborate
                with you at every step of the process to ensure that the final
                product is not only aesthetically pleasing, but also
                user-friendly, SEO optimized, and mobile responsive. I also
                provide ongoing maintenance and support to ensure that your
                website is always up-to-date and performing at its best.
              </p>
            </div>
            <div className="mb-2 space-y-1">
              <h2 className={`question`}>
                PHILOSOPHY OF <span className="highlighted">MINE</span>
              </h2>
              <p className="answer ">
                I strongly believe that design is not just about making things
                look pretty, but about solving problems, improving experiences,
                and creating meaningful connections between brands and their
                audiences. That&apos;s why I approach every project with a
                meticulous attention to detail and a focus on user-centered
                design. Every pixel, every line of code, every interaction is
                carefully crafted to optimize functionality, usability, and
                accessibility. I am committed to providing you with a website
                that not only looks great, but also delivers tangible results
                for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qna;
