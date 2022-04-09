import { useState } from "react";

export function TodoInput({ onAdd }) {
  let [value, setValue] = useState("");

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          onAdd(value);
          setValue("");
        }}
      >
        Add todo
      </button>
    </div>
  );
}
