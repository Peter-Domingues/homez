import { StoreContext } from "@/store/context";
import store from "@/store/reducers";
import { Provider } from "react-redux";
import "../index.scss";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Elfsight script loaded!");
        }}
      />
      <Script src="/js/popper.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Provider store={store} context={StoreContext}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
