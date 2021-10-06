import { Button, makeStyles, AppBar, Toolbar, Grid, Avatar } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  grow:{
    flexGrow: 1,
  },
  button:{
    marginRight: 10
  },
  tituloToolBar:{
    marginRight: 5,
    alignItems: 'center'
  },
  userSection:{
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center'
  },
  titulo:{
    color: '#f50057',
    fontSize: 25,
    marginLeft: 25,
    alignItems: 'center'
  },
  semEstilo:{
    textDecoration: 'none'
  }
});

function Header (){
  const classes = useStyles();
    return (
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item className={classes.tituloToolBar}>
              <h1 className={classes.titulo}>
                <a className={classes.semEstilo} href="/">Gerenciamento</a>
              </h1>
            </Grid>
            <div className={classes.grow}/>
            <Grid item className={classes.userSection}>
              <Button className={classes.button} variant="contained" color="primary"
              href="/login">
                Logout
              </Button>
              <Avatar alt="Jemy Sharp" src="/"/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      
    );
}
export default Header;