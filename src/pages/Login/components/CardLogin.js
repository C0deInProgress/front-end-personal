import { Box, Button, makeStyles, Container, Link, Paper, TextField, Input } from '@material-ui/core'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { BASE_URL } from '../../../Utils/requests'
import { CONFIG } from '../../../Utils/config'
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ghostwhite',

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '15px',
    padding: '30px 70px 50px 70px',
    boxShadow: '0 0 1em lightgrey',
  },
  ajustarAoCentro: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btnGeral: {
    padding: 24,
  },
  btnLogin: {
    margin: 8,
    backgroundColor: '#2196f3',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '10px 25px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    font: 'bold',
    fontSize: '20px',
  },
  btnCreate: {
    margin: 8,
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '10px 25px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    font: 'bold',
    fontSize: '20px',
  },
  linkEsqueceu: {
    marginTop: 10
  }
});


export default function CardLogin({ setToken }) {
  const [user, setUser] = useState();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { handleSubmit, errors } = useForm();
  const classes = useStyles();
  let navigate = useNavigate();



  function realizarLogin() {
    axios.post(`${BASE_URL}/auth/login`, {
      login: login,
      password: password
    })
      .then(response => {
        console.log("this")
        localStorage.setItem('token', response.data.jwt);
        console.log(localStorage.getItem('token'))
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <Container className={classes.root}>
      <Paper>
        <form onSubmit={handleSubmit(realizarLogin)} className={classes.card}>
          <h1>Login</h1>
          <Box className={classes.ajustarAoCentro}>
            <h3>Nome de Usuário</h3>
            <Input value={login} onChange={(e) => setLogin(e.target.value)} />
          </Box>
          <Box className={classes.ajustarAoCentro}>
            <h3>Senha</h3>
            <Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
          </Box>
          <div className={classes.btnGeral}>
            <Button className={classes.btnLogin} type='submit' >Logar</Button>
            <Button className={classes.btnCreate} >Criar conta</Button>
            <div className={classes.linkEsqueceu}>
              <Link href="#">Esqueceu sua senha ? clique aqui</Link>
            </div>
          </div>
        </form>
      </Paper>
    </Container>
  )
}

