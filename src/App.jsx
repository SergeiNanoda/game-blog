import HeaderBar from "./components/headerbar/HeaderBar";
import FooterBar from "./components/footer/FooterBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
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
