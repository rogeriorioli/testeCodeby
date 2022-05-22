import { CartProvider } from "../context/cartContext";
import Layouts from "../layouts";
import Global from "../styles/globals";
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layouts title="CodeBy Store">
        <Component {...pageProps} />
      </Layouts>
      <Global />
    </CartProvider>
  );
}

export default MyApp;
