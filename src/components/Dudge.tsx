'use client'

import { useState } from "react";

type Dudge = {
  count: number;
}

export default function Dudge() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>카운트:{count}</div>
      <button onClick={handleClick}>뿅</button>
    </div>
  );
}

