import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  item,
  OnDeleteItems,
  onToggleItems,
  ClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            OnDeleteItems={OnDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed Items</option>
        </select>
        <button onClick={ClearItems}>Clear List</button>
      </div>
    </div>
  );
}
