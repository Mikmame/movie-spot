import React from "react";
import "./index.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import { ScrollToTop } from "./components/ScrollToTop";

class App extends React.Component {
  mainRef = React.createRef();

  handleReset = () => {
    if (this.mainRef.current && this.mainRef.current.resetSearch) {
      this.mainRef.current.resetSearch();
    }
  };

  render() {
    return (
      <>
        <Header onReset={this.handleReset} />
        <Main ref={this.mainRef} />
        <Footer />
        <ScrollToTop />
      </>
    );
  }
}

export default App;