import './App.css'
import ShoppingList from './ShoppingList'

function App() {
  const data = [
    { id: 1, item: 'Milk', quantity: 2, completed: true },
    { id: 2, item: 'Bread', quantity: 1, completed: false },
    { id: 3, item: 'Eggs', quantity: 12, completed: false },
    { id: 4, item: 'Apples', quantity: 6, completed: true }
  ];

  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}

export default App
