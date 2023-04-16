const ContactSection = () => {
  return (
    <>
      Not done yet apologize
      <section className="flex h-screen ">
        <div className="container">
          <div className="flex justify-between gap-10">
            <div className="relative flex flex-col">
              <label className="text-sm leading-7 text-gray-600">
                Your name
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="relative flex flex-col">
              <label className="text-sm leading-7 text-gray-600">
                Your email
              </label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <div className="relative flex flex-col">
              <label className="text-sm leading-7 text-gray-600">
                What you are interested
              </label>
              <input type="text" id="name" name="name" className="" />
            </div>
            <div className="relative flex flex-col">
              <label className="text-sm leading-7 text-gray-600">
                Project Budget
              </label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <div className="relative flex flex-col">
            <label className="text-sm leading-7 text-gray-600">Message</label>
            <input type="text" id="name" name="name" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
