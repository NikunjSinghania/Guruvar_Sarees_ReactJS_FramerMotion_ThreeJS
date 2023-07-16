import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AnimatePresence } from "framer-motion";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AnimatePresence>
    <App />

    </AnimatePresence>
  </StrictMode>
);
