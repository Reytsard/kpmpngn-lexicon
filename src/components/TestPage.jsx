import React from "react";
import About from "./About";
import Table from "./Table";
import Header from "./Header";
import Footer from "./Footer";

function TestPage() {
  return (
    <>    
    <header>
      <Header />
    </header>
    <div>
      <About />
      <Table />
    </div>
    <Footer/>
    </>
  );
}

export default TestPage;
