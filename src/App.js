import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import FooterBar from "./components/FooterBar";
import Alert from "./components/Alert";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  const [mode, setMode] = useState("light");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert("", "");
    }, 1000);
  };
  const [alert, setAlert] = useState("", "");

  return (
    <>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} mode={mode} />
        <div className="container my-3">
              <TextForm
                heading="Enter the text to analyse"
                mode={mode}
                showAlert={showAlert}
              />
        </div>
          <FooterBar mode={mode} />
    </>
  );
}

export default App;
