import { Container, Grid, Paper, TextField, Button } from '@material-ui/core'
import { Add } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useStyles } from '../../PagesCSS/templateCss';
import React from 'react'

export default function CardExercises() {
    const classes = useStyles();

    return (
      <div>
        <Container className={classes.root}>
          <Paper className={classes.card}>
            <form >
              <Box className={classes.containerCampos}>
                <h3 className = {classes.ajustarAoCentro}>Criar Exercício</h3>
                <Grid className={classes.ajustarNoEixoY} container spacing={2}>
                  <Grid  item xs={2}>
                    <h4>Nome do exercício:</h4>
                  </Grid>    
                  <Grid item xs = {10}>
                    <TextField variant="outlined" id="nomeExercicio"/>
                  </Grid>
                  <Grid item xs={2}>
                    <h4>Video do exercício</h4>
                  </Grid>
                  <Grid item xs={10}>
                    <Button className={classes.btnAdd} startIcon={<Add/>}>Adicionar</Button>
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
