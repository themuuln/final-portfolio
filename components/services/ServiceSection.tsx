const ServiceSection = () => {
  return (
    <>
      {/* <div className="container">
        <div className="grid h-screen grid-cols-1 grid-rows-3 gap-8 px-4 py-10 xl:grid-cols-3 xl:grid-rows-1 xl:py-20">
          <div className="row-start-1 row-end-2 rounded-md bg-brand_bg-500/30 xl:col-start-1 xl:col-end-2">
            1
          </div>
          <div className="row-start-2 row-end-3 rounded-md bg-brand_bg-500/30 xl:col-start-2 xl:col-end-3">
            2
          </div>
          <div className="row-start-3 row-end-4 rounded-md bg-brand_bg-500/30 xl:col-start-3 xl:col-end-4">
            3
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="grid h-screen gap-10 py-20 xl:grid-cols-3 xl:grid-rows-1">
          <div className="rounded-md bg-brand_bg-500/30  xl:col-start-1 xl:col-end-2">
            1
          </div>
          <div className="rounded-md bg-brand_bg-500/30 xl:col-start-2 xl:col-end-3">
            2
          </div>
          <div className="rounded-md bg-brand_bg-500/30 xl:col-start-3 xl:col-end-4">
            3
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
