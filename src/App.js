import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  console.log('render');
  return (
    <div className="App">
      <Header />

      <hr />
      {count}
      <hr />

      <button onClick={() => setCount(count - 1)}> Minus ONE </button>
      <button onClick={() => setCount(count + 1)}> Plus ONE </button>
      <Main />

      <Footer />
    </div>
  );
}

export default App;
