import './App.css';
import Person from "./Components/Person";

function App() {
  return (
    <>
    <Person fName={"Jane"} lName={"Doe"} age={45} hColor={"Black"}/>
    <Person fName={"John"} lName={"Smith"} age={88} hColor={"Brown"}/>
    <Person fName={"Fillmore"} lName={"Millard"} age={50} hColor={"Brown"}/>
    <Person fName={"Maria"} lName={"Smith"} age={62} hColor={"Brown"}/>
    </>
  );
}

export default App;
