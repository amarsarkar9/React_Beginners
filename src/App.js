// import logo from './logo.svg';
import "./css/App.css";
import Welcome from "./Welcome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import { Container } from "react-bootstrap";

function App() {
  const menu1 = "Home";
  const menu2 = "About";
  const menu3 = "Contact";
  const companyname="Newton School";
  return (
    <div className="App">
      <Container className="bg-info">
        {/* <div className='container bg-info'> */}
        <Header menuitem1={menu1} menuitem2={menu2} menuitem3={menu3}/>
        <Main companyname={companyname}/>
        <Footer />
      </Container>
      {/* </div> */}
    </div>
  );
}

// const App=() =>{
//   let name="Amar";
//   return <Welcome name={name} />;
// };

// function App() {
//   return (
//     <div className="App">
//       <FunctionalComp/>
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
