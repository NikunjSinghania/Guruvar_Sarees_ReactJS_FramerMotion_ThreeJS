import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <AnimatePresence>
      <App 
        
      />

    </AnimatePresence>
    </BrowserRouter>
    
  </StrictMode>
);
