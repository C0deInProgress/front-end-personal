import { makeStyles } from '@material-ui/core';
import React from 'react'
import CardLogin from './components/CardLogin'

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardLogin />
    </div>
  )
}
export default Login;