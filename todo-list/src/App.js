import './App.css';
import listIcon from './assets/img/list.svg';
import List from './components/List/List';
import AddNewCategory from './components/AddNewCategory/AddNewCategory';
import DB from './assets/db.json';
import { useState } from 'react';

function App() {
  const newList = DB.lists.map(list => {
    const listColor = DB.colors.find(c => c.id === list.colorId).name;
    return { ...list, color: listColor}
  });

  const [lists, setLists] = useState(newList);

  const handleAddCategory = newCategory => {
    const newList = [...lists, newCategory];
    console.log(newCategory);
    setLists(newList);
  }

  const handleRemove = id => {
    const newLists = lists.filter(list => list.id !== id);
    setLists(newLists);
  }

  return (
    <main className="todo">
      <aside className="todo__sidebar">
        <List 
          items={[
            {
              className: 'list__item',
              icon: listIcon,
              name: "Все Задачи",
              isActive: true
            }
          ]} />

        <List 
          items={lists}
          removeItem={handleRemove} 
        />

        <AddNewCategory colors={DB.colors} addCategory={handleAddCategory} />
      </aside>
      <section className="todo__tasks">
        Tasks
      </section>
    </main>
  );
}

export default App;
