import "./App.css";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/Navbar";
import HomePage from "./home-page/HomePage";
import About from "./about/About";
import Details from "./details/Details";
import BuyAndSell from "./buy-and-sell/BuyAndSell";
import TopNft from "./top-nft/TopNft";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <Navbar />{" "}
        </div>

        <HomePage />

        <div className="mt-5 d-flex">
          <About />
        </div>

        <div className="row mt-5">
          <Details />
        </div>

        <div className="row mt-5">
          <BuyAndSell />
        </div>

        <div className="row my-5">
          <TopNft />
        </div>
      </div>
    </div>
  );
}

export default App;
