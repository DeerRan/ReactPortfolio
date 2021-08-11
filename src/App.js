import React from "react";
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import './App.css';
import github from "./Assets/github.png"
import linkedin from "./Assets/linkedin.png"
import email from "./Assets/email.jpg"

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
            <div className="row justify-content-center">
              <a className="col-2" href="https://github.com/DeerRan" target="_blank">
                <img className="logos" src= { github } />
              </a>

              <a className="col-2" href="https://www.linkedin.com/in/DeerRan" target="_blank">
                <img className="logos" src= { linkedin } />
              </a>

              <a className="col-2" href="mailto:Darren.Scott.0905@gmail.com" target="_blank">
                <img className="logos" src= { email } />
              </a>
              <p className="col-2 num">612-834-1808</p>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;