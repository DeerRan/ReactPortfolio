import React from "react";
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from "react-router-dom";
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header title="Darren Scott" className="header" style={{ backgroundColor: "black" }}>
          <Navigation>
            <Link to="/">About Me</Link>
            <Link to="/work">My Work</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>

        </Header>

        <Content>
          <Main></Main>
          <div className="footer" style={{ backgroundColor: "black" }}>
            {/* Insert A link wrap with img inside for github and linkedin */}

            <p style={{ color: "white" }}>
              FOOOOOOOOOOOOOOOOOOOOOOOT
            </p>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
