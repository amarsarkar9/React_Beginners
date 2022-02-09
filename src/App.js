// import logo from './logo.svg';
import "./css/App.css";
import Welcome from "./Welcome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import { Container } from "react-bootstrap";
import Menuitem from "./Menuitem";
// import Classs from "./classs";

function App(props) {
  const menu1 = "Home";
  const menu2 = "About";
  const menu3 = "Contact";
  const companyname="Newton School";
  return (
    <div className="App">
      <Container className="bg-info">
        {/* <div className='container bg-info'> */}
        <Header menuitem1={menu1} menuitem2={menu2} menuitem3={menu3}/>
        {/* <Header menuitem1={props.menu1} menuitem2={props.menu2} menuitem3={props.menu3}/> */}
        <Main companyname={companyname}/>
        <Footer />
      </Container>
      {/* </div> */}
    </div>
  );
}

// function App() {
//   return (
//     <>
//       <Classs />
//     </>
//   );
// }

// const App=() =>{
//   let name="Amar";
//   return <Welcome name={name} />;
// };


export default App;
