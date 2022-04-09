import { useEffect, useState } from "react";
import { Counter } from "./components/Counter";
import { TestClass } from "./components/Test";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import "./App.css";

export function App() {
  const { items, setItems } = useTodos();

  return (
    <div>
      <Counter />
      <TodoInput
        onAdd={(value) => {
          setItems([
            ...items,
            { id: Math.random(), title: value, completed: false },
          ]);
        }}
      />
      <TodoList
        renderHeader={<h1>List header</h1>}
        items={items}
        onDelete={(item) => {
          setItems(items.filter((todoItem) => todoItem.id !== item.id));
        }}
      />
    </div>
  );
}

// virtual dom tree
