import LogoImage from "../../../assets/Logomark_1_.svg";

type Props = {
  width: string;
};
const Logo = (props: Props) => {
  return (
    <a href="/">
      <img src={LogoImage} alt="Logo" style={{ width: props.width }} />
    </a>
  );
};

export default Logo;
