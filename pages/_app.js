import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MiddleCalled from "@/redux/MiddleCalled";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MiddleCalled>
        <Component {...pageProps} />
      </MiddleCalled>
    </Provider>
  );
}
