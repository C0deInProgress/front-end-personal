import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'
import CardRegister from './components/CardRegister';
import Header from '../Home/components/Header';
import NavBar from '../Home/components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    padding: 24
  },
  toolbar: {
    minHeight: 64,

  }
}));


export default function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <div className={classes.main}>
        <Container maxWidth="lg">
          <Box display="flex">
            <NavBar />
            <CardRegister />
          </Box>
        </Container>
      </div>
    </div>
  )
}
