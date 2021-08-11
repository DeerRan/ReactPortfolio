import React from "react";
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header title="Darren Scott" className="header" 
          style={{ backgroundColor: "black" , color: "rgb(180, 180, 180)" }}>
          <Navigation>
            <Router>
              <Link className="link" to="/">About Me</Link>
              <Link className="link" to="/work">My Work</Link>
              <Link className="link" to="/resume">Resume</Link>
            </Router>
          </Navigation>

        </Header>

        <Content>
          <Main />
          <div className="footer" style={{ backgroundColor: "black" }}>
            {/* Insert A link wrap with img inside for github and linkedin */}

            <p>
              FOOOOOOOOOOOOOOOOOOOOOOOT
            </p>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;