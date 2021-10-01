import React from 'react';
import './App.css';
import { Button } from './Components/Button';

function App() {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const handleAdd = () => {
    if (value === '') {
      alert('Campo obrigatório!');
    } else if (list.includes(value)) {
      alert('Item já adicionado.');
      setValue('');
    } else {
      setList([...list, value]);
      setCount(count >= 0 ? count + 1 : count);
      setValue('');
    }
  };
  const handleRemove = (index) => {
    // Tentei com filter mas fica dando um bug que ainda nao resolvi.
    /* const lista = [...list];
    const listaFilter = lista.filter((item, i) => item[i] !== item[index]); // segunda forma com filter
    setList(listaFilter); */
    setList([...list, list.splice(index, 1)]);
    setList([...list]);
    setCount(count >= 0 ? count - 1 : count);
  };

  const handleDelete = () => {
    setList([]);
    setCount(0);
    setValue('');
  };

  return (
    <div className="main">
      <div className="container">
        <h1>Minha Lista</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="/">
            <input
              maxLength="50"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <Button type="submit" onClick={handleAdd}>
            add
          </Button>
        </form>
      </div>
      {list.length > 0 && (
        <div className="list">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                &#11166;&nbsp;
                {item}
                <Button onClick={() => handleRemove(index)}>X</Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="boxContador">
        <p>Total Tasks: {count}</p>
        <Button onClick={handleDelete}>Limpar Lista</Button>
      </div>
    </div>
  );
}

export default App;
