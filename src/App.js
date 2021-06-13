import React ,{useReducer , useContext , createContext} from 'react';
import './App.css';
import Counter from './components/counter';

const initialState = {
  counter: 2,
}

const CounterContext = createContext();

export const useCounterContext = ()=> useContext(CounterContext);

const reducer = (state,action)=>{
  switch(action.type){
      case 'INCREAMENT':
          return {...state , counter: state.counter + action.payload }
          case 'DECREAMENT':
              return {...state , counter: state.counter - action.payload }
      case 'RESET':
          return state;
      default:
          return state;
  }
}

function App() {
  const [count , dispatch ] = useReducer(reducer , initialState)
  return (
    <div className="App">
      <CounterContext.Provider value={{value: count , dispatch : dispatch}}>
    <Counter/>
      </CounterContext.Provider>

    </div>
  );
}

export default App;
