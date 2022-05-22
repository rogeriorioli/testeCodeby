import { FooterContainer } from "./style";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <FooterContainer>&copy; Copyright {year}</FooterContainer>;
};

export default Footer;
