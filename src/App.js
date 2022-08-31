import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import TasklistComponent from './components/container/tasklist';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/clock';
import ClockFuncional from './components/pure/clockFuncional';
// import TasklistComponent from './components/container/tasklist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TasklistComponent/>
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplo4 nombre='Andres'>*/}
        {/* Todo lo que este dentro sera tratado como props.children */}

        {/*<h3> Contenido de props.children </h3>*/}

        {/*</Ejemplo4>*/}
        <GreetingStyled name='Andres' />
        <Clock/>
        <ClockFuncional/>
      </header>

    </div>
  );
}

export default App;
