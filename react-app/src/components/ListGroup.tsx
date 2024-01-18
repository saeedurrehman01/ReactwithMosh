import { useState } from "react";

function ListGroup() {
  let items = ["New York", "London", "San Fransisco", "Paris"];
  // Hook
  let [selectedIndex, setSelectedIndex] = useState(-1);

  // const message = items.length === 0 ? <p>No items found</p> : null;

  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
