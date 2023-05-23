type Props = {
  href: string;
  name: string;
};
const Links = ({ href, name }: Props) => {
  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      {name}
    </a>
  );
};

export default Links;
