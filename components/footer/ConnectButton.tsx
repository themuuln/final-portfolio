const ConnectButton = ({ icon, href }: any) => {
  return (
    <a
      className="rounded-full border-2 border-brand_main-300 p-2 transition-all hover:border-brand_main-700 hover:bg-brand_main-500 hover:text-brand_main-600"
      href={href}
      target={"blank"}
    >
      {icon}
    </a>
  );
};

export default ConnectButton;
