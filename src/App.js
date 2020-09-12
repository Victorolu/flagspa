import React from 'react';
import './App.css';
import Layout from './app/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)


function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
