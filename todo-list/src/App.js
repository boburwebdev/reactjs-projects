import './App.css';
import listIcon from './assets/img/list.svg';
import List from './components/List/List';
import AddNewCategory from './components/AddNewCategory/AddNewCategory';
import DB from './assets/db.json';

function App() {
  return (
    <main className="todo">
      <aside className="todo__sidebar">
        <List 
          items={[
            {
              className: 'list__item',
              icon: listIcon,
              text: "Все Задачи",
              isActive: true
            }
          ]} />

        <List 
          items={[
            {
              color: 'green',
              text: 'Покупки',
            },
            {
              color: 'blue',
              text: 'Фронтенд'
            },
            {
              color: 'pink',
              text: 'Фильмы и сериалы'
            },
            {
              color: 'lightgreen',
              text: 'Книги'
            },
            {
              color: 'gray',
              text: 'Личное'
            }
          ]} 
          isRemovable
        />

        <AddNewCategory colors={DB.colors} />
      </aside>
      <section className="todo__tasks">
        Tasks
      </section>
    </main>
  );
}

export default App;
