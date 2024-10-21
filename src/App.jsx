import "./App.css";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Galery from "./components/Galery";
import Header from "./components/Header";
import Hook1 from "./components/Hook1";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Content1 />
      <Galery />
      <Hook1 />
      <Services />
      <Reviews />
      <Content2 />
    </>
  );
}

export default App;
