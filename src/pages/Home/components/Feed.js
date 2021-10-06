import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import TabelaDados from './TabelaDados';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  datatable: {
    margin: 40,
  },
  tituloParaTabela:{
    color: '#f50057',
    fontSize: 28,
    padding: 20,
    marginLeft: 20
  }

}));


export default function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h1 className={classes.tituloParaTabela} >Tabela de Teste</h1>
      <TabelaDados className={classes.datatable} />
    </Container>
  )
}
