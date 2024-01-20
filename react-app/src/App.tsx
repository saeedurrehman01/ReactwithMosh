import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "bootstrap/dist/css/bootstrap.css";
import { FaCalendarAlt } from "react-icons/fa";

function App() {
  let items = ["New York", "London", "San Fransisco", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <FaCalendarAlt color="Red" size={40} />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert></Alert>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;

let arc = 1;
