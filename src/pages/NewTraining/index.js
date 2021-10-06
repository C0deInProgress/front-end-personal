import { makeStyles, Container, Box } from '@material-ui/core'
import React from 'react'
import Header from '../Home/components/Header';
import NavBar from '../Home/components/NavBar';
import CardNewTraining from './components/CardNewTraining';

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


export default function NewTraining() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Header/>
        <div className={classes.toolbar}></div>
        <div className={classes.main}>
          <Container>
            <Box display="flex">
              <NavBar/>
              <CardNewTraining/>
            </Box>
          </Container>
        </div>
      </div>
    )
}
