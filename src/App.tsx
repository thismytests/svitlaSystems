import React from 'react';
import './App.css';

// material ui
import {Grid} from '@material-ui/core';

// routing
import Routing from './pages/routing';

const App: React.FC = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {/*Routing*/}
        <Grid item sm={12}>
          <Routing/>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
