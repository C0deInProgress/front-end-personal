import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap'
import Feed from '../../pages/Home/components/Feed'
import Header from '../../pages/Home/components/Header'
import NavBar from '../../pages/Home/components/NavBar'

const useStyles = makeStyles({
    root:{
      flexDirection: 'colunm'
    },
    main:{
        height: '100vh',
        padding: 24
    },
    toolbar:{
      minHeight: 64,
  
    }
  })

export default function Template() {
    const classes = useStyles();
    return (
      <Container>
        <div className={classes.root}>
          <Header/>
          <div className={classes.toolbar}></div>
          <main className={classes.main}>
            <Box>
              {/* <Feed/> */}
              <NavBar/>
            </Box>
          </main>
        </div>
      </Container>
    )
}
