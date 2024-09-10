export function Stats({ item }) {
  const numOfItems = item.length;

  if (numOfItems === 0)
    return (
      <footer className="stats">Start adding some items to the list 🚀</footer>
    );
  const itemsPacked = item.filter((item) => item.packed).length;
  const presentage = Math.round((itemsPacked / numOfItems) * 100);

  if (presentage === 100)
    return <footer className="stats">You got everything! Lets go ✈️</footer>;
  return (
    <footer className="stats">
      <em>
        {" "}
        {`you have ${numOfItems} items in your List,and you already packed ${itemsPacked} (${presentage}%)`}
      </em>
    </footer>
  );
}
