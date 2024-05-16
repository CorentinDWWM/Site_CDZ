import { useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  const [logged, setLogged] = useState(false);

  function handleLogged() {
    setLogged(true);
    console.log(logged);
  }
  return (
    <>
      <div className={`d-flex flex-column ${styles.page}`}>
        <Header logged={logged} />
        <div style={{ height: "100px" }}></div>
        <div className={`${styles.global}`}>
          <Outlet handleLogged={handleLogged} />
        </div>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}

export default App;
