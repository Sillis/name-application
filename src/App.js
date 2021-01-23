import React from 'react';
import './App.css';
import NameDisplay from './components/nameDisplay';
import AmountDisplay from './components/amountDisplay';
import CountAmount from './components/countAmount';
import data from './names.json';

function App() {
  return (
    <div className="App">
        <div className="headline">
          There are a total of { data.names.length } names in the name list, equaling to a grand total of { CountAmount(data) } individuals in the organization.
        </div>
        <div className="displaycontainer">
          <div className="nameDisplay">
            <h4 className="sectionTitle">These names are listed alphabetically.</h4>
            <NameDisplay />
          </div>
          <div className="amountDisplay">
            <h4 className="sectionTitle">These names are listed by popularity.</h4>
            <AmountDisplay />
          </div>
        </div>
        <div className="bottomline">
          If you want to see more of the stuff I've done, or just want to get to know me, visit <a href="https://sillis.fi" target="_blank" rel="noopener noreferrer">my simplified portfolio website</a>.
        </div>
    </div>
  );
}

export default App;