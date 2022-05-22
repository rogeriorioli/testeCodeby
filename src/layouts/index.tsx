import Head from "next/head";

import { ReactElement } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../styles/style";

interface LayoutProps {
  children: ReactElement;
  title: string;
}

const Layouts = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A loja mais doce da internet" />
        <link
          rel="icon"
          href="https://cdn.shopify.com/s/files/1/0088/3579/3001/files/apple-icon-57x57_32x32_54ed123f-9931-48f1-a1c1-301bc9b6f7ab.png"
        />
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layouts;
