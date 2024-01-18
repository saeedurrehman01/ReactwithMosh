import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "London", "San Fransisco", "Paris"];
  let selectedIndex = -1;

  // const message = items.length === 0 ? <p>No items found</p> : null;

  // Event Handler
  const handle = (event: MouseEvent) => console.log(event);
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
            onClick={handle}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
