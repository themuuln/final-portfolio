const ConnectButton = ({ icon, href }: any) => {
  return (
    <a
      className="rounded-full border-[1px] border-brand_main-400 p-2 transition-all hover:border-brand_main-500 hover:bg-brand_main-500 hover:text-brand_bg-500"
      href={href}
      target={"blank"}
    >
      {icon}
    </a>
  );
};

export default ConnectButton;
