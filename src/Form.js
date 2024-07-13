import { useState } from "react";
import { categories } from "./App";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("👚");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !category) return;

    const newItem = {
      description,
      quantity,
      category,
      packed: false,
      id: Date.now(),
    };
    // console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
    setCategory("👚");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>✈️ What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      ></input>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <button>Add</button>
    </form>
  );
}
