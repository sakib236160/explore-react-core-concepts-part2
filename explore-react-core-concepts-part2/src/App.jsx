import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {


  function handleClick(){
    alert('Plz Click Me Sakib');
  }
  const handleClick2 = () =>{
    alert('Plz Click Me Ety');
  }

  // function handleClick(){
  //   alert('button click');
  // }

  // const handleClick2 = () => {
  //   alert('button click2');
  // }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>click Me Sakib</button>
      <button onClick={handleClick2}>2Click Me Ety!</button>
      <button onClick={() => alert('Plz Click Me Sakib Ar Ety Kotha')}>3Click Me Sakib Ar Ety Kotha!</button>



      {/* <button onClick={handleClick }>Click Me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => alert('button click 3')}>click 3</button> */}
    </>
  )
}

export default App
