import { Button, Paper, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
    marginRight: 20,
    padding: theme.spacing(2), // pega o default do tema e multiplica pelo parametro que esta recebendo (8x2)
    width: 150,
  },
  button: {
    width: '100%',
  },
  buttonsNav: {
    borderBottom: 'inset',
    color: 'secondary',
    fontSize: 10,
    borderRadius: 10,
  },
  fonte: {

  }
}));

const options = [
  { id: 0, name: 'Home', action: '/' },
  { id: 1, name: 'Novo Aluno', action: '/Register' },
  { id: 2, name: 'Novo Treino', action: '/newTraining' },
  { id: 3, name: 'Novo Exercício', action: '/newExercises' },
  { id: 4, name: 'Todos os Exercícios', action: '/allExercises' },
  { id: 5, name: 'Plano de Treino', action: '/TrainingPlan' }
]

function NavBar() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {
        options.map((item) => (
          <ListItem className={classes.buttonsNav} button key={`item-${item.id}-${item.name}`}>
            <Button href={`${item.action}`}>
              <ListItemText className={classes.fonte} primary={`${item.name}`} />
            </Button>
          </ListItem>
        ))
      }
    </Paper>
  )
}
export default NavBar;
