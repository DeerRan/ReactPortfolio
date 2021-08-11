import React from "react";
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import { Link, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import './App.css';
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <Layout>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left">
          <Navigation>
                <a href="/">About Me</a>
                <a href="/work">My Work</a>
                <a href="/resume">Resume</a>
            </Navigation>
        </Drawer>
        <Header title="Darren Scott" className="header" 
          style={{ backgroundColor: "black" , color: "rgb(180, 180, 180)" }}>
          <Navigation expand = "true">
            <Router>
              <a className="link" href="/">About Me</a>
              <a className="link" href="/work">My Work</a>
              <a className="link" href="/resume">Resume</a>
            </Router>
          </Navigation>

        </Header>

        <Content>
          <Main />
          <Footer />
        </Content>
      </Layout>
    </div>
  );
}

export default App;