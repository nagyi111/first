import { useState } from 'react';
import './App.css';

import Counter from './components/Counter';
import { Dices } from './components/dice';
import { Programs } from './components/Programs';
import { MyTodos } from './components/MyTodos.jsx'

function App() {

  const [selected, setSelected] = useState(null);

  return (
    <div>

      <h1 className="text-center text-3xl font-bold mt-6 mb-6">
        My first app
      </h1>

      {/* Felső 3 gomb */}
      <div className="flex justify-center">

        <div className="flex bg-blue-600 rounded-lg overflow-hidden">

          <button
            type="button"
            onClick={() => setSelected('counter')}
            className={`
              px-6 py-3 text-white
              border-r border-blue-400
              cursor-pointer
              ${selected === 'counter'
                ? 'bg-blue-800'
                : 'bg-blue-600 hover:bg-blue-700'}
            `}
          >
            Counter
          </button>

          <button
            type="button"
            onClick={() => setSelected('dice')}
            className={`
              px-6 py-3 text-white
              border-r border-blue-400
              cursor-pointer
              ${selected === 'dice'
                ? 'bg-blue-800'
                : 'bg-blue-600 hover:bg-blue-700'}
            `}
          >
            Dice
          </button>

          <button
            type="button"
            onClick={() => setSelected('programs')}
            className={`
              px-6 py-3 text-white
              cursor-pointer
              ${selected === 'programs'
                ? 'bg-blue-800'
                : 'bg-blue-600 hover:bg-blue-700'}
            `}
          >
            Programs
          </button>

        </div>

      </div>


      {/* Todo gomb */}
      <div className="flex justify-center mt-3 mb-8">

        <button
          type="button"
          onClick={() => setSelected('todo')}
          className={`
            px-10 py-3 text-white rounded-lg cursor-pointer
            ${selected === 'todo'
              ? 'bg-blue-800'
              : 'bg-blue-600 hover:bg-blue-700'}
          `}
        >
          Todo
        </button>

      </div>


      {/* Tartalom */}
      {selected === 'counter' && <Counter />}

      {selected === 'dice' && <Dices />}

      {selected === 'programs' && <Programs />}

      {selected === 'todo' && <MyTodos />}

    </div>
  );
}

export default App;