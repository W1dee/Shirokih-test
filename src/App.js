import React from 'react';
import Cards from './cards/Cards';

class App extends React.Component {
  render() {
    return(
      <div>
        <input id="valueView" type="checkbox" />
        <label htmlFor="valueView">Просмотр</label>
        <Cards />
      </div>
    )
  }
}

export default App;
