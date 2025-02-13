// importo componenti 
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css'


function App() {

  // array link navbar
  const navLinks = [
    { tag: "CHARACTERS", url: "#", content: true },
    { tag: "COMICS", url: "#", content: true },
    { tag: "MOVIES", url: "#", content: true },
    { tag: "TV", url: "#", content: true },
    { tag: "GAMES", url: "#", content: true },
    { tag: "COLLECTIBLES", url: "#", content: true },
    { tag: "VIDEOS", url: "#", content: true },
    { tag: "FANS", url: "#", content: true },
    { tag: "NEWS", url: "#", content: true },
    { tag: "SHOP", url: "#", content: true },
  ];

  return (
    <>
      <Header links={navLinks} />
      <Main />
      <Footer />
    </>
  )
}

export default App
