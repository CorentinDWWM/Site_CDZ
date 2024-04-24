import styles from "./App.module.scss";
import Accueil from "./Pages/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.page}`}>
      <>
        <Header />
        <Accueil />
        <Footer />
      </>
    </div>
  );
}

export default App;
