/*
Name: Ronghui Zhang
Date: 11/15/2026
Assignment: Week 3 - React Component
*/

// imports CSS stylesheet
import "./App.css";

// imports component file Image
import Image from "./components/Image";

// App component
function App() {
  return (
    <>
      <div className="container">
        <h1>ShinChan Characters</h1>

        <div className="imgView">
          {/* image details that will be passed to Image component */}
          <Image
            img_file="dai.jpg"
            alt="Bo-Chan"
            name="Bo-Chan"
            width="200"
            height="200"
          />
          <Image
            img_file="fj.jpg"
            alt="Toru Kazama"
            name="Toru Kazama"
            width="200"
            height="200"
          />
          <Image
            img_file="lbxx.jpg"
            alt="Shin Chan"
            name="Shin Chan"
            width="200"
            height="200"
          />
          <Image
            img_file="nini.jpg"
            alt="Nene Sakurada"
            name="Nene Sakurada"
            width="200"
            height="200"
          />
        </div>
      </div>
    </>
  );
}

export default App;
