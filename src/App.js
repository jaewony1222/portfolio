import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
