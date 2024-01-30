// import axios from "axios";
// import { useEffect, useState } from "react";

import { useState } from "react";

// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setUsers(res.data));
//   }, []);

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

function App() {
  const [count, setCount] = useState(0);

  function decCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decCount}>-</button>
      <span>{count}</span>
      <button onClick={incCount}>+</button>
    </>
  );
}

export default App;
