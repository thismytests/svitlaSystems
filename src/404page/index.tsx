import React from 'react';
import {Avatar, Grid} from "@material-ui/core";

// logo
const NotFoundImg = require('../404.png');

export default function NotFound() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '80vh' }}>
      <Grid item xs={12}>
        <img alt="Remy Sharp" src={NotFoundImg}/>
      </Grid>
    </Grid>
  )
}
