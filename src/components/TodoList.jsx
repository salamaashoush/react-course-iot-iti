import { TodoItem } from "./TodoItem";

export function TodoList({ items, onDelete, renderHeader }) {
  return (
    <>
      {renderHeader}
      <p>Hello</p>

      <ul className="list-group">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            value={item}
            onDelete={() => {
              onDelete(item);
            }}
          >
            {(title) => <span>{title}</span>}
          </TodoItem>
        ))}
      </ul>
    </>
  );
}
