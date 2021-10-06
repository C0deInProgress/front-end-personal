import React from 'react'
import { Box, Container, Grid, Paper, TextField, Button } from '@material-ui/core'
import { useStyles } from '../../PagesCSS/templateCss';

export default function CardRegister() {
    const classes = useStyles();
    return (
      <div>
        <Container className={classes.root}>
          <Paper>
            <form className={classes.card}>
              <Box>
                <h3 className={classes.ajustarAoCentro}>Cadastrar Aluno</h3>
                <Grid className={classes.containerCampos} container spacing={2}>
                  <Grid item xs={8}>
                    <h4>Nome:</h4>
                    <TextField variant="outlined" id="nomeAluno"/>
                  </Grid>    
                  <Grid item xs={8}>          
                    <h4>Data de nascimento:</h4>
                    <TextField variant="outlined" id="dtNascimento"/>
                  </Grid>  
                  <Grid item xs={8}>
                    <h4>Idade:</h4>
                    <TextField variant="outlined" id="idadeAluno"/>
                  </Grid>
                  <Grid item xs={8}>
                    <h4>Email:</h4>          
                    <TextField variant="outlined" id="emailAluno"/>
                  </Grid>
                  <Grid item xs={8}>
                    <h4>Gênero:</h4>
                    <TextField variant="outlined" id="generoAluno"/>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <div className={classes.ajustarAoCentro}>
                  <Button className={classes.btnCreate} href="/" >Cadastrar</Button>
                  <Button className={classes.btnCancel} href="/" >Voltar</Button>
                </div>
              </Box>
            </form>
          </Paper>
        </Container>
      </div>
    )
}
