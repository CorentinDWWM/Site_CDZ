import { useState } from "react";
import styles from "./App.module.scss";
import Accueil from "./Pages/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Form/Login";
import { url } from "./url";

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
      <>
        <Header
          handleFormPage={handleFormPage}
          handleHomePage={handleHomePage}
        />
        <div className={`${styles.vide}`}>
          <div style={{ height: "100px" }}></div>
          {formPage === true ? (
            mdpOublie === true ? (
              <MdpPerdu />
            ) : (
              <Login handleToggleMdpOublie={handleToggleMdpOublie} />
            )
          ) : (
            /* ) : VideosPage === true ? ( */
            /* <Videos /> */
            /* ) : BoutiquePage === true ? ( */
            /* <Boutique /> */
            /* ) : ContactPage === true ? ( */
            /* <Contact /> */
            <Accueil />
          )}
          <Footer />
        </div>
      </>
    </div>
  );
}

export default App;
