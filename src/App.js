import {useDispatch, useSelector } from 'react-redux';

import { addCar, decrementNum, decrementNum5 , incrementNum, incrementNum5 } from './redux/reducers/reducer';

function App() {
  const dispatch = useDispatch();
  const cars = useSelector(s => {
    return s.reducer.cars
  });
const num = useSelector(s => s.reducer.num)

  return (

      <div className="App">
        <h1>{num}</h1>
        <button onClick={()=>{
          dispatch(incrementNum())
        }}>+1</button>
        <button onClick={()=>{
          dispatch(incrementNum5())
        }}>+5</button>
        <button onClick={()=>{
          dispatch(decrementNum())
        }}>-1</button>
        <button onClick={()=>{
          dispatch(decrementNum5())
        }}>-5</button>
        <button onClick={()=>{
          dispatch(addCar())
        }}>add</button>
      {
        cars.map(item =>{
          return <h1>{item.model}</h1>
        })
      }
      </div>

  );
}

export default App;
