import './App.css'
import { FormEvent } from './components/FormEvent';
import { EventTheme } from './components/EventTheme';
import { Banner } from './components/Banner';
import { EventCard } from './components/EventCard';
import { useState } from 'react';

function App() {

  const themes = [
    { id: 1, name: 'front-end' },
    { id: 2, name: 'back-end' },
    { id: 3, name: 'devops' },
    { id: 4, name: 'inteligência artificial' },
    { id: 5, name: 'data science' },
    { id: 6, name: 'cloud' }
  ];



  const [events, setEvents] = useState(
    [{
      cover: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      theme: themes[0],
      date: new Date(),
      eventTitle: 'Mulheres no Front'
    }]
  )

  function addEvent(eventItem) {
    setEvents([...events, eventItem]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormEvent themes={themes} whenSubmit={addEvent} />
      {
        themes.map(function (item) {
          return (
            <section key={item.id}>
              <EventTheme theme={item} />
              {events.map(function (item, index) {
                return <EventCard event={item} key={index} />
              })}

            </section>
          )
        }
        )
      }
    </main>
  )
}

export default App
