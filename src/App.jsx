import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <div data-aos="fade-up-left" data-aos-duration="1000">
        <h1>HEllo Oussama</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          cupiditate recusandae sed distinctio voluptas tenetur eum ab atque
          ullam eius.
        </p>
      </div>
      <div data-aos="fade-up-right" data-aos-duration="1000">
        <h1>HEllo Oussama</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          cupiditate recusandae sed distinctio voluptas tenetur eum ab atque
          ullam eius.
        </p>
      </div>
      <div data-aos="fade-up-left" data-aos-duration="1000">
        <h1>HEllo Oussama</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          cupiditate recusandae sed distinctio voluptas tenetur eum ab atque
          ullam eius.
        </p>
      </div>
      <div data-aos="fade-up-right" data-aos-duration="1000">
        <h1>HEllo Oussama</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          cupiditate recusandae sed distinctio voluptas tenetur eum ab atque
          ullam eius.
        </p>
        <div style={{ background: "#eee", height: "100vh" }} id="about">
          <h1>About</h1>
        </div>
      </div>
    </>
  );
}

export default App;
