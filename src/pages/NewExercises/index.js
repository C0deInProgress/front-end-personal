import { makeStyles, Container } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react'
import Header from '../Home/components/Header';
import NavBar from '../Home/components/NavBar';
import CardExercises from './components/CardExercises';


const useStyles = makeStyles((theme) => ({
  root:{
      display: 'flex',
      flexDirection: 'column',
  },
  main:{
    height: '100vh',
    padding: 24
},
toolbar:{
  minHeight: 64,
}
}));


export default function NewExercises() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.toolbar}></div>
      <div className={classes.main}>
        <Container>
          <Box display="flex">
            <NavBar/>
            <CardExercises/>
          </Box>
        </Container>
      </div>
    </div>
  )
}
