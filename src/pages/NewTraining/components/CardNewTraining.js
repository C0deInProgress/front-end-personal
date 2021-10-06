import { Box, Button, Container, Grid, Paper, TextField } from '@material-ui/core'
import { Add } from '@mui/icons-material';
import React from 'react'
import { useStyles } from '../../PagesCSS/templateCss';


export default function CardNewTraining() {
    const classes = useStyles();
    return (
      <div>
        <Container className={classes.root}>
          <Paper>
            <form className={classes.card}>
              <Box>
                <h3 className={classes.ajustarAoCentro}>Criar Treino</h3>
                <Grid className={classes.containerCampos} container spacing={2}>
                  <Grid item xs={8}>
                    <h4>Nome:</h4>
                    <TextField variant="outlined" id="nomeTreino"/>
                  </Grid>    
                  <Grid item xs={8}>          
                    <h4>Tipo de treino:</h4>
                    <TextField variant="outlined" id="tipoTreino"/>
                  </Grid>  
                  <Grid item xs={8}>
                    <h4>Quantidade de séries:</h4>
                    <TextField variant="outlined" id="qtdSeries"/>
                  </Grid>
                  <Grid item xs={8}>
                    <h4>Tempo de intervalo:</h4>          
                    <TextField variant="outlined" id="tempoIntervalo"/>
                  </Grid>
                  <Grid item xs={12}>
                    <h4>Carga recomendada*obs-não sei se entra-*:</h4>
                    <TextField variant="outlined" id="cargaTreino"/>
                  </Grid>
                  <Grid  className={classes.ajustarAoCentro}  item xs={2}>
                    <h4>Adicionar Exercircio</h4>
                  </Grid>
                  <Grid className={classes.ajustarAoCentro} item xs={10}>
                    <Button className={classes.btnAdd} startIcon={<Add/>}>Adicionar</Button>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <div>
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
