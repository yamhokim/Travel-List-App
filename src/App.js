import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export const categories = ["👚", "🚽", "📃", "⚡", "💵", "🍽️", "🧳", "⛺"];

export default function App() {
  // Lifting up state, items needs to be passed to the packinglist, but we cannot do this from Form since its a sibling component
  // Therefore, we lift the state to the nearest common parent component
  const [items, setItems] = useState([]);

  // Do the same with handleAddItems
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    // console.log(items);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
