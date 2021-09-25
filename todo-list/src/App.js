import './App.css';
import listIcon from './assets/img/list.svg';
import plusIcon from './assets/img/add.svg';
import List from './components/List/List';

function App() {
  return (
    <main className="todo">
      <aside className="todo__sidebar">
        <List items={[
          {
            icon: listIcon,
            text: "Все Задачи",
            isActive: true
          }
        ]} />
        <List items={[
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
        ]} />

        <List items={[
          {
            icon: plusIcon,
            text: 'Добавить категорию'
          }
        ]} />
      </aside>
      <section className="todo__tasks">
        Tasks
      </section>
    </main>
  );
}

export default App;
