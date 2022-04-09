import { useEffect, useState } from "react";

export function useTodos() {
  const [items, setItems] = useState([
    { id: 1, title: "Item1", completed: true },
    { id: 2, title: "Item2", completed: false },
  ]);

  useEffect(() => {
    //
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return { items, setItems };
}
