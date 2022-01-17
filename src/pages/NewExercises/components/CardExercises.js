import { Container, Grid, Paper, TextField, Button, Input } from '@material-ui/core'
import { Add } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useStyles } from '../../PagesCSS/templateCss';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../../../Utils/requests';

export default function CardExercises() {
  const [dadosExercicio, setDadosExercicio] = useState({});
  var [token, setToken] = useState("")
  const classes = useStyles();

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log(token)
  }, [token])

  function tryRegister() {
    axios.post(`${BASE_URL}/exercicios`,
      {
        dadosExercicio
      },
      {
        headers: {
          Authorization: token
        }
      }
    ).then(response => {
      alert('Sucesso: ' + response.data);
    })
      .catch(error => {
        console.log(error)
      })
  }


  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDadosExercicio(dadosExercicio => ({
      ...dadosExercicio,
      [name]: value
    }));
  }

  return (
    <div>
      <Container className={classes.root}>
        <Paper className={classes.card}>
          <form onSubmit={handleSubmit} >
            <Box className={classes.containerCampos}>
              <h3 className={classes.ajustarAoCentro}>Criar Exercício</h3>
              <Grid className={classes.ajustarNoEixoY} container spacing={2}>
                <Grid item xs={2}>
                  <h4>Nome do exercício:</h4>
                </Grid>
                <Grid item xs={10}>
                  <Input type='text' value={dadosExercicio.nome}
                    name='nome' onChange={handleChange} required={true} />
                </Grid>
                <Grid item xs={2}>
                  <h4>Video do exercício</h4>
                </Grid>
                <Grid item xs={10}>
                  <Button className={classes.btnAdd} startIcon={<Add />}>Adicionar</Button>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <div className={classes.ajustarAoCentro}>
                <Button className={classes.btnCreate} onClick={() => tryRegister()} >Cadastrar</Button>
                <Button className={classes.btnCancel} href="/" >Voltar</Button>
              </div>
            </Box>
          </form>
        </Paper>
      </Container>

    </div>
  )
}
