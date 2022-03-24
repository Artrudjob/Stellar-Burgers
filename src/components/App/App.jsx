import React from 'react';
import appStyle from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";

function App() {
  return (
    <div className={appStyle.App}>
      <AppHeader />
    </div>
  );
}

export default App;
