import React from 'react';
import './App.css';

function App() {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState([]);
  const [count, setCount] = React.useState(0);

  window.localStorage.setItem('Lista', list);

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
    const lista = [...list];
    const listaFilter = lista.filter((item, i) => item[i] !== item[index]); // segunda forma com filter
    setList(listaFilter);
    setCount(count >= 0 ? count - 1 : count);
    /* setList([...list, list.splice(index, 1)]); // Primeira forma que fiz.
    setList([...list]); */
  };

  const handleDelete = () => {
    setList([]);
    setCount(0);
    setValue('');
  };

  return (
    <div className="container">
      <div className="boxToDo">
        <h1>Minha Lista</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="/">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <button type="submit" onClick={handleAdd}>
            add
          </button>
        </form>
      </div>
      <div className="list">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRemove(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="boxContador">
        <p>Total Tasks: {count}</p>
        <button onClick={handleDelete}>Limpar Lista</button>
      </div>
    </div>
  );
}

export default App;
