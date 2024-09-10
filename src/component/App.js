import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 52, packed: true },
  { id: 3, description: "flight", quantity: 2, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handlerItems(item) {
    setItems((items) => [...items, item]);
  }

  function DeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function ClearAllItems() {
    const confirmed = window.confirm("are u sure to clear all items");

    if (confirmed) setItems([]);
  }

  function ToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handlerItems} />
      <PackingList
        item={items}
        OnDeleteItems={DeleteItems}
        onToggleItems={ToggleItems}
        ClearItems={ClearAllItems}
      />
      <Stats item={items} />
    </div>
  );
}
