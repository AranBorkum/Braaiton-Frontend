import logo from "./../logo.svg";
import "./../App.css";
import TopNavigationBar from "../components/TopNavigationBar";
import { useContext } from "react";
import { AuthContext } from "../App";

function Home() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      <TopNavigationBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
