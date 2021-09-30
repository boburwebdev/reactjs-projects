import React, { useState, useEffect } from 'react';
import axios from 'axios';
import listIcon from './assets/img/list.svg';

import { List, AddNewCategory, Tasks } from './components';
import './App.css';

function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4004/lists?_expand=color&_embed=tasks`)
        .then(({ data }) => {
          console.log(data);
          setLists(data);
        });
      
    axios.get(`http://localhost:4004/colors`)
          .then(({ data }) => {
            setColors(data);
          })
  }, [])

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

        {lists ? <List 
          items={lists}
          removeItem={handleRemove} 
        /> : 'Загрузка...'}

        <AddNewCategory colors={colors} addCategory={handleAddCategory} />
      </aside>
      <section className="todo__tasks">
        <Tasks title="Фронтенд" />
      </section>
    </main>
  );
}

export default App;
