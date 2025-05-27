import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import App1 from "./src/components/App1";
import App2 from "./src/components/App2";
import App3 from "./src/components/App3";
import App4 from "./src/components/App4";
import App5 from "./src/components/App5";
import App6 from "./src/components/App6";
import App7 from "./src/components/App7";
import App8 from "./src/components/App8";
import App9 from "./src/components/App9";
import App10 from "./src/components/App10";
import App11 from "./src/components/App11";
import App12 from "./src/components/App12";
import App13 from "./src/components/App13";
import App14 from "./src/components/App14";
import App15 from "./src/components/App15";
import App16 from "./src/components/App16";
import App17 from "./src/components/App17";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App1 />}></Route>
        <Route path="/" element={<App1 />}></Route>
        <Route path="/App2" element={<App2 />}></Route>
        <Route path="/App3" element={<App3 />}></Route>
        <Route path="/App4" element={<App4 />}></Route>
         <Route path="/App5" element={<App5 />}></Route>
         <Route path="/App6" element={<App6 />}></Route>
         <Route path="/App7" element={<App7 />}></Route>
         <Route path="/App8" element={<App8 />}></Route>
         <Route path="/App9" element={<App9 />}></Route>
         <Route path="/App10" element={<App10 />}></Route>
         <Route path="/App11" element={<App11 />}></Route>
         <Route path="/App12" element={<App12 />}></Route>
          <Route path="/App13" element={<App13 />}></Route>
          <Route path="/App14" element={<App14 />}></Route>
          <Route path="/App15" element={<App15 />}></Route>
           <Route path="/App16" element={<App16 />}></Route>
            <Route path="/App17" element={<App17 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;