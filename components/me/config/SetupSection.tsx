const SetupSection = () => {
  return (
    <>
      <section className="flex justify-center min-w-full min-h-screen">
        <div className="w-full max-w-7xl">
          <div>
            <h2>Keyboard Management</h2>
            <p>Escape -&gt; `</p>
            <p>Caps lock -&gt; Escape</p>
          </div>
          <div>
            <h2>Development:</h2>
            <p>IDE: Visual Studio Code, Neovim</p>
            <p>Terminal: Windows Terminal</p>
          </div>
          <h2>Browser: Microsoft Edge</h2>
        </div>
      </section>
    </>
  );
};

export default SetupSection;
