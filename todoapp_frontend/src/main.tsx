import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { Provider as UIProvider } from "./components/ui/provider.tsx";

import { store } from "./store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UIProvider>
  </StrictMode>
);
