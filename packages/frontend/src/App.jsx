import HeaderBar from "./components/headerbar/HeaderBar";
import FooterBar from "./components/footer/FooterBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <HeaderBar />
      <ToastContainer />
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="article/:id" element={<Single />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter> */}

      <Outlet />

      <FooterBar />
    </div>
  );
}

export default App;
