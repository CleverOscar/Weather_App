import Navbar from "./Views/Navbar/Navbar";
import LandingPage from "./Views/Landing_Page/LandingPage";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      <div className="container">
        <LandingPage/> 
      </div>
    </div>
  );
}

export default App;
