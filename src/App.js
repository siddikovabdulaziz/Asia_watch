import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Card from "./routes/card/Card";
import Wishies from "./routes/wishies/Wishies";
import NavbarMain from "./components/navbar/NavbarMain";
import { ToastContainer } from "react-toastify";
import SingleRoute from './routes/singleRoute/SingleRoute';
import "react-toastify/dist/ReactToastify.css";
import Form from './routes/form/Form';
import Taqqoslash from './routes/taqoslash/Taqqoslash';


function App() {
  return (
    <div className="App">
      <NavbarMain />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card" element={<Card />} />
        <Route path="like" element={<Wishies />} />
        <Route path="taqqoslash" element={<Taqqoslash />} />
        <Route path="/product/:id"  element={<SingleRoute />} />
        <Route path="form"  element={<Form/>} />
       
      </Routes>
    </div>
  );
}

export default App;
