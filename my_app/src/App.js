import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'
import BookContainer from './components/bookContainer'
import PenContainer from './components/penContainer';


function App (){
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <PenContainer/>
      </div>
      </Provider>
  )
}
export default App;