import { useEffect, useState } from "react";

export function TodoItem({ value, onDelete, children }) {
  return (
    <li className="list-group-item">
      <input type="checkbox" checked={value.completed} />
      {children(value.title)}
      <button className="btn btn-danger" onClick={() => onDelete()}>
        X
      </button>
    </li>
  );
}
