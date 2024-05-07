import { useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { url } from "./url";
import { Outlet } from "react-router-dom";

function App() {
  const [formPage, setFormPage] = useState(false);
  const [mdpOublie, setMdpOublie] = useState(false);

  async function data() {
    try {
      const response = await fetch(`${url}api/users`);
      if (response.ok) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleFormPage() {
    setFormPage(!formPage);
  }

  function handleToggleMdpOublie() {
    setMdpOublie(!mdpOublie);
  }

  function handleHomePage() {
    setFormPage(!formPage);
    setMdpOublie(!mdpOublie);
  }
  return (
    <div className={`d-flex flex-column ${styles.page}`}>
      <Header />
      <div style={{ height: "100px" }}></div>
      <div className={`${styles.global}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
