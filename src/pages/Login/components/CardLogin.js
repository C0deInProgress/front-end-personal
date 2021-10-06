import { Box, Button, makeStyles, Container, Link, Paper, TextField } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'ghostwhite',

    },
    card:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',    
      borderRadius: '15px',
      padding: '30px 70px 50px 70px',
      boxShadow: '0 0 1em lightgrey',  
    },
    ajustarAoCentro:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',   
    },
    btnGeral:{
      padding: 24,
    },
    btnLogin:{
      margin: 8,
      backgroundColor: '#2196f3'
    },
    btnCreate:{
      margin: 8,
      backgroundColor: '#4caf50'
    },
    linkEsqueceu:{
      marginTop: 10
    }
});

export default function CardLogin() {
    const classes = useStyles();
    return (
      <Container className={classes.root}>
        <Paper>
          <form className={classes.card}>
            <h1>Login</h1>
            <Box className={classes.ajustarAoCentro}>
              <h3>Nome de Usuário</h3>
              <TextField id="nomeUsuario" variant="outlined"/>
            </Box>
            <Box className={classes.ajustarAoCentro}>
              <h3>Senha</h3>
              <TextField id="senhaUsuario" variant="outlined"/>
            </Box>
            <div className={classes.btnGeral}>
              <Button className={classes.btnLogin} href="/" >Logar</Button>
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
