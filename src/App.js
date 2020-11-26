import React from 'react';
import logo from './logo.svg';
import './App.css';

import FirstDiv from './component/FirstDiv';
import GithubProfile from './component/Github';

// function App() {
//   return (
//     <div className="App">
//       <h1> hello world </h1>
//       <h1> hello world </h1>
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <FirstDiv nameProp="Basit Aziz"/> */}
        <GithubProfile />
      </div>
    )
  }
}

export default App;
