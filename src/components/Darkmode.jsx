import { useEffect } from "react";
import Darkmode from "darkmode-js";

function DarkModeComponent() {
  useEffect(() => {
    const options = {
      // Customize your dark mode settings here
      bottom: "35px", // default: '32px'
      right: "unset", // default: '32px'
      left: "32px", // default: 'unset'
      time: "1s", // default: '0.3s'
      mixColor: "#fff", // default: '#fff'
      backgroundColor: "#fff", // default: '#fff'
      buttonColorDark: "#100f2c", // default: '#100f2c'
      buttonColorLight: "#000", // default: '#fff'
      saveInCookies: false, // default: true,
      label: "🌓", // default: ''
      autoMatchOsTheme: true, // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget(); // Display dark mode if preferred

    return () => {
      darkmode.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return <></>; // Empty fragment, as this component doesn't render anything
}

export default DarkModeComponent;
