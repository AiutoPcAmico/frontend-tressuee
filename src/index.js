import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DarkModeProvider } from "./theme/DarkModeContext";
import { ContactForm } from "./components/ContactForm";
import { HomePages } from "./components/homePages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<ContactForm />}>
            <Route index element={<HomePages />} />
            <Route path="blogs" element={null} />
            <Route path="contact" element={null} />
            <Route path="*" element={null} />
          </Route>
        </Routes>
      </BrowserRouter>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
