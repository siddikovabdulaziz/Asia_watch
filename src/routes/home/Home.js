import React from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { DATA, DATAA } from "../../static/index";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Banner date={DATAA} />
      <Product data={DATA} />
      <Footer />
    </div>
  );
}

export default Home;
