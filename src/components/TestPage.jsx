import React from "react";
import About from "./About";
import Table from "./Table";
import Header from "./Header";

function TestPage() {
  return (
    <>    
    <header>
      <Header />
    </header>
    <div>
      <About />
      <Table />
    </div></>

  );
}

export default TestPage;
