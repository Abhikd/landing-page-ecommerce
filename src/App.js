import React from "react";
import Banner from "./components/Banner";
import BestSelling from "./components/BestSelling";
import Category from "./components/Category";
import FashionBanner from "./components/FashionBanner";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import HurryUp from "./components/HurryUp";
import LargeCards from "./components/LargeCards";
import LooseFitBanner from "./components/LooseFitBanner";
import MediumCards from "./components/MediumCards";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Policy from "./components/Policy";
import Subscribe from "./components/Subscribe";
import TShirtCategory from "./components/TShirtCategory";

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Category />
      <MediumCards />
      <LargeCards />
      <Featured />
      <FashionBanner />
      <BestSelling />
      <NewProducts />
      <TShirtCategory />
      <LooseFitBanner />
      <HurryUp />
      <Policy />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
