import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Count is {count}</h1>;
}
