import React, { useEffect, useState } from 'react'
import { Container, Grid, makeStyles, Button, Box } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Add } from '@mui/icons-material';
import { CONFIG } from '../../../Utils/config';
import { BASE_URL } from '../../../Utils/requests';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: 15,
  },
  teste: {
    marginRight: 50
  },
  btnCreate: {
    margin: 8,
    backgroundColor: '#2196f3'
  },
  btnCancel: {
    margin: 8,
    backgroundColor: 'red'
  },
  btnAdd: {
    margin: 8,
    backgroundColor: 'green'
  },
  root: {
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
    border: 'outset',
    padding: 3,
    color: 'secondary',
    borderRadius: 10,
  },
  containerCampos: {
    marginLeft: 30,
    marginRight: 10
  },
  ajustarAoCentro: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    padding: 10
  },
});



export default function TableAllExercirces() {
  const classes = useStyles();
  var [exercicios, setExercicios] = useState([])

  const buscarDados = () => {
    axios.get(`${BASE_URL}/exercicios`, CONFIG)
      .then(response => {
        setExercicios(response.data)
      }).catch(function (error) {
        console.log(error)
        console.log(CONFIG)
      })
  }
  useEffect(() => {
    buscarDados()
  }, [])

  return (
    <div>
      <Container className={classes.root}>
        <Paper className={classes.card}>
          <Box className={classes.containerCampos}>
            <h3 className={classes.ajustarAoCentro}>
              Tabela de exercícios</h3>
            <Grid className={classes.containerCampos} container spacing={2}>
              <TableContainer className={classes.teste}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nome</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {exercicios.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          {item.nome}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className={classes.ajustarAoCentro}>
                <Grid item>
                  <h4>Novo Exercircio: </h4>
                </Grid>
                <Grid item>
                  <Button className={classes.btnAdd} href="/newExercises" startIcon={<Add />}>Adicionar</Button>
                </Grid>
              </div>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}
