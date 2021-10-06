import { makeStyles, Container } from '@material-ui/core'
import { Box } from '@mui/system';
import React from 'react'
import Header from '../Home/components/Header';
import NavBar from '../Home/components/NavBar';
import TableAllExercirces from './components/TableAllExercirces';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main:{
    height: '100vh',
    padding: 24
  },
  toolbar:{
    minHeight: 64,
  },
})

export default function AllExercises() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <Header/>
        <div className={classes.toolbar}></div>
        <div className={classes.main}>
          <Container maxWidth="lg">
            <Box display="flex">
              <NavBar/>
              <TableAllExercirces/>
            </Box>
          </Container>
        </div>
      </div>
    )
}
