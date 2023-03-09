const ConnectButton = ({ icon, href }: any) => {
  return (
    <a href={href} target={"blank"}>
      {icon}
    </a>
  );
};

export default ConnectButton;
