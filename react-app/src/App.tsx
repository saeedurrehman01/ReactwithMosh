
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "San Fransisco", "Paris"];
  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;

let arc = 1;