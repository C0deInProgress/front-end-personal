import React, { useState, useRef, useEffect } from 'react'
import { Box, Container, Grid, Paper, Input, Button } from '@material-ui/core'
import { useStyles } from '../../PagesCSS/templateCss';
import { BASE_URL } from '../../../Utils/requests';
import axios from 'axios';

export default function CardRegister() {
  const classes = useStyles();
  var [token, setToken] = useState("")
  var [dadosAluno, setDadosAluno] = useState({})

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log(token)
  }, [token])


  function tryRegister() {
    axios.post(`${BASE_URL}/alunos`,
      {
        aluno: {
          nome: dadosAluno.nome,
          data_nascimento: dadosAluno.data_nascimento,
          idade: dadosAluno.idade,
          email: dadosAluno.email,
          genero: dadosAluno.genero,
        }
      }, {
      headers: {
        Authorization: token
      }
    }
    )
      .then(response => {
        alert('Sucesso: ' + response.data);
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setDadosAluno(dadosAluno => ({
      ...dadosAluno,
      [name]: value
    }));
  };

  return (
    <div>
      <Container className={classes.root}>
        <Paper>
          <form onSubmit={handleSubmit} className={classes.card}>
            <Box>
              <h3 className={classes.ajustarAoCentro}>Cadastrar Aluno</h3>
              <Grid className={classes.containerCampos} container spacing={2}>
                <Grid item xs={8}>
                  <h4>Nome:</h4>
                  <Input type='text' value={dadosAluno.nome}
                    name='nome' onChange={handleChange} required={true} />
                </Grid>
                <Grid item xs={8}>
                  <h4>Data de nascimento:</h4>
                  <Input variant="outlined" required value={dadosAluno.data_nascimento} type='date'
                    name='data_nascimento' onChange={handleChange} />
                </Grid>
                <Grid item xs={8}>
                  <h4>Idade:</h4>
                  <Input variant="outlined" value={dadosAluno.idade} type='number'
                    name='idade' onChange={handleChange} required />
                </Grid>
                <Grid item xs={8}>
                  <h4>Email:</h4>
                  <Input variant="outlined" value={dadosAluno.email} type='email'
                    name='email' onChange={handleChange} required />
                </Grid>
                <Grid item xs={8}>
                  <h4>Gênero, por enquanto 1 ou 2:</h4>
                  <Input variant="outlined" value={dadosAluno.genero} type='number'
                    name='genero' onChange={handleChange} required />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <div className={classes.ajustarAoCentro}>
                <Button className={classes.btnCreate} type='submit' value="Submit" onClick={() => tryRegister()} >Cadastrar</Button>
                <Button className={classes.btnCancel} href="/" >Voltar</Button>
              </div>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  )
}
