const FooterSection = () => {
  return (
    <>
      <section className="relative h-[20vh] ">
        <div className="container relative flex h-full w-[90vw] flex-col items-center gap-2 rounded-lg bg-brand_bg-300">
          <h2>Start a project</h2>
          <p>Work together?</p>
          <button>Go ahead!</button>
        </div>
      </section>
      <footer className=" bg-brand_bg-400">
        <div className="container h-[40vh]">Footer Section</div>
      </footer>
    </>
  );
};

export default FooterSection;
