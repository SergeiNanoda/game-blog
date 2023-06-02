import HeaderBar from "./headerbar/HeaderBar";
import FooterBar from "./footer/FooterBar";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Home />

      <FooterBar />
    </div>
  );
}

export default App;
