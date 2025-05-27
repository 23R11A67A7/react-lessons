import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./src/components/Test.jsx";
createRoot(document.getElementById("root")).render(<App />);

//React creates virtual DOM
//Physical root
//Virtual root
//Reactjs updates virtual root, which automatically updated physical root