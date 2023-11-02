import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import ChooseLang from "./Components/ChooseLang";
import Editor from "./Components/Editor";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <Alert alert="Welcome to  CODESTALKER, An Online Code Compiler and Editor." />
      <Navbar />
      <Main />
    </>
  );
}

export default App;
