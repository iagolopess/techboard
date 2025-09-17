import './App.css'
import { FormEvent } from './components/FormEvent';
import { EventTheme } from './components/EventTheme';
import { Banner } from './components/Banner';

function App() {
  const themes = [
    { id: 1, name: 'front-end' },
    { id: 2, name: 'back-end' },
    { id: 3, name: 'devops' },
    { id: 4, name: 'inteligência artificial' },
    { id: 5, name: 'data science' },
    { id: 6, name: 'cloud' }
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt=""/>
      </header>
      <Banner />
      <FormEvent />
      {
        themes.map(function (item) {
          return (
            <section key={item.id}>
              <EventTheme theme={item} />
            </section>
          )
        }
        )
      }
    </main>
  )
}

export default App
