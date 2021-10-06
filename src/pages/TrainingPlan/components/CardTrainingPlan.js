import { Container, Paper, Grid, Button, ListItem, ListItemText, TextField } from '@material-ui/core'
import { Box } from '@mui/system';
import { useStyles } from '../../PagesCSS/templateCss';
import React from 'react'


const treinos = [
    { id: 1, name: 'treino A', action: '/Register'},
    { id: 2, name: 'treino B', action: '/newTraining'},
]


export default function CardTrainingPlan() {
    const classes = useStyles();
    return (
      <div>
        <Container className={classes.root}>
          <Paper>
            <form className={classes.card}>
              <Box>
                <h3 className={classes.ajustarTituloAoCentro}>Planos de Treino</h3>
                <Grid className={classes.containerCampos} container spacing={2}>
                  <Grid item xs={2}>
                    <h4>Aluno:</h4>
                  </Grid>  
                  <Grid item xs={10}>
                    <h4>Fernando</h4>
                  </Grid> 
                  <Grid item xs={2}>
                    <h4>Treinos:</h4>
                  </Grid>    
                  <Grid item xs = {8}>
                    {
                       treinos.map((item) => (
                         <ListItem className={classes.buttonsTreino} button key={`item-${item.id}-${item.name}`}>

                           <ListItemText primary={`${item.name}`}/>

                         </ListItem>
                       ))
                   }
                  </Grid>
                  <Grid item xs = {2}/>
                  <Grid item xs={2}>
                    <h4>Data Inicio:</h4>
                  </Grid>  
                  <Grid item xs={10}>
                    <h4>10/02/2020</h4>
                  </Grid>
                  <Grid item xs={2}>
                    <h4>Data Termino:</h4>
                  </Grid>  
                  <Grid item xs={10}>
                    <h4>10/04/2020</h4>
                  </Grid> 
                  <Grid item xs={2}>
                    <h4>Observação:</h4>
                  </Grid>  
                  <Grid item xs = {10}>
                    <TextField variant="outlined" id="observacaoPlanoTreino"/>
                  </Grid>
                  <Grid className={classes.ajustarCamposCentro} item xs={1}>
                    <h4>Plano:</h4>
                  </Grid>  
                  <Grid  item xs={4}>
                    <h4 className={classes.bordaFina}>Plano de Exemplo</h4>
                  </Grid>
                  <Grid className={classes.ajustarCamposCentro} item xs={2}>
                    <h4>Intensidade:</h4>
                  </Grid>  
                  <Grid  item xs={4}>
                    <h4 className={classes.bordaFina}>Exemplo de intensidade</h4>
                  </Grid>
                  <Grid item xs={1}/>
                  <Grid className={classes.ajustarCamposCentro} item xs={1}>
                    <h4>Semanas:</h4>
                  </Grid>  
                  <Grid item xs={4}>
                    <h4 className={classes.bordaFina}>Quantidade de semanas</h4>
                  </Grid>
                  <Grid className={classes.ajustarCamposCentro} item xs={2}>
                    <h4>Frequencia:</h4>
                  </Grid>  
                  <Grid item xs={4}>
                    <h4 className={classes.bordaFina}>Frequencia recomendada</h4>
                  </Grid>
                  <Grid item xs={1}/>
                  <Grid className={classes.ajustarCamposCentro} item xs={1}>
                    <h4>Objetivo:</h4>
                  </Grid>  
                  <Grid item xs={4}>
                    <h4 className={classes.bordaFina}>Objetivo a ser alcançado</h4>
                  </Grid>
                  <Grid className={classes.ajustarCamposCentro} item xs={2}>
                    <h4>Preferencia:</h4>
                  </Grid>  
                  <Grid item xs={4}>
                    <h4 className={classes.bordaFina}>Exemplo de preferencia</h4>
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
