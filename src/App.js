import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  const u1 = {
    name: "jamila",
    Description: "my name is jamila bukhari",
    Footer: "Face book",
  };
  const u2 = {
    name: "shujaat",
    Description: "i am shujaat ali",
    Footer: "Twitter",
  };
  const u3 = {
    name: "ali",
    Description: "i am ali g ",
    Footer: "Instagram",
  };
  return (
    <div className="App">
      <Header header="Welcome" />
      <Gallery />
      <hr />
      <Services user1={u1} user2={u2} user3={u3} />
      <Footer Footer="Copyright here 2023" />
    </div>
  );
}

export default App;
