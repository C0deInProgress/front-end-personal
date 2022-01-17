import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { BASE_URL } from '../../../Utils/requests';
import { CONFIG } from '../../../Utils/config';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: 15
  },
});

/* function createData(nome, data de nascimento, idade, genero) {
  return { nome, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]; */



export default function TabelaDados() {
  var [alunos, setAlunos] = useState([])
  const classes = useStyles();
  var [token, setToken] = useState("")



  function buscarDados() {
    axios.get(`${BASE_URL}/alunos`, {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        setAlunos(response.data)
      }).catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    setToken(localStorage.getItem('token'))
    buscarDados()
  }, [token])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Data de nascimento</TableCell>
            <TableCell align="center">Idade</TableCell>
            <TableCell align="center">Genero</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alunos.map(item => (
            <TableRow key={item.id}>
              <TableCell >{item.nome}</TableCell>
              <TableCell align="center">{item.data_nascimento}</TableCell>
              <TableCell align="center">{item.idade}</TableCell>
              <TableCell align="center">{item.genero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}