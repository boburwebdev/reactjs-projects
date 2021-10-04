import React, { useState, useEffect } from 'react';
import axios from 'axios';
import listIcon from './assets/img/list.svg';

import { List, AddNewCategory, Tasks } from './components';
import './App.css';

function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [tasksIndex, setTasksIndex] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4004/lists?_expand=color&_embed=tasks`)
        .then(({ data }) => {
          setLists(data);
        });
      
    axios.get(`http://localhost:4004/colors`)
          .then(({ data }) => {
            setColors(data);
          })
  }, [lists?.length])

  const handleAddCategory = newCategory => {
    axios.get(`http://localhost:4004/lists?_expand=color&_embed=tasks`)
        .then(({ data }) => {
          const newList = [...data, newCategory];
          setLists(newList);
        });
  }

  const handleRemove = id => {
    const newLists = lists.filter(list => list.id !== id);
    setLists(newLists);
  }

  const handleUpdateTitle = (id, newTitle) => {
    const newLists = lists.map(list => {
      return list.id === id ? { ...list, name: newTitle} : list
    });

    setLists(newLists);

    axios.patch(`http://localhost:4004/lists/${id}`, { name: newTitle })
          .then(data => {
            console.log(data);
          })
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
              // isActive: true
            }
          ]} />

        {lists ? <List 
          items={lists}
          removeItem={handleRemove}
          onClickListItem={(item) => {
            setTasksIndex(lists.indexOf(item));
            setActiveItem(item);
          }}
          activeItem={activeItem} 
        /> : 'Загрузка...'}

        <AddNewCategory colors={colors} addCategory={handleAddCategory} />
      </aside>
      <section className="todo__tasks">
        {lists && lists[tasksIndex] && <Tasks taskItems={lists[tasksIndex]} updateTitle={handleUpdateTitle} />}
      </section>
    </main>
  );
}

export default App;
