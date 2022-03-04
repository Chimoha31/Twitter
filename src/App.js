import './App.css';

function App() {
  const list = [1, 2, 3,4];

  const persons = [
    {
      name: "Teddy",
      age: 1,
    },
    {
      name: "Hana",
      age: 11,
    }
  ]

  return (
    <div className="App">
      <h1>Map practice</h1>
      {list.map((li, index) => (
        <div key={index}>{li * 2}</div>
      ))}
    <div>

      {persons.map((person, i) => (
        <div key={i}>
          I'm {person.name}, {person.age} year old
        </div>
        ))}
    </div>
    </div>
  );
}

export default App;
