import React from 'react'
import { Container, Grid, makeStyles, Button, Box} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Add } from '@mui/icons-material';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        margin: 15,
      },
      teste:{
        marginRight: 50
      },
      btnCreate:{
        margin: 8,
        backgroundColor: '#2196f3'
      },
      btnCancel:{
        margin: 8,
        backgroundColor: 'red'
      },
      btnAdd:{
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
      card:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',    
        border: 'outset',
        padding: 3,
        color: 'secondary',
        borderRadius: 10,
      },
      containerCampos:{
        marginLeft: 30,
        marginRight: 10
      },
      ajustarAoCentro:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        padding: 10
      },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


export default function TableAllExercirces() {
    const classes = useStyles();
    return (
      <div>
        <Container className={classes.root}>
          <Paper className={classes.card}>
            <Box className={classes.containerCampos}>
              <h3 className={classes.ajustarAoCentro}>
                Exemplo de tabela para ser populada por exercircios</h3>
              <Grid className={classes.containerCampos} container spacing={2}>
                <TableContainer className={classes.teste}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
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
                    <Button className={classes.btnAdd} href="/newExercises" startIcon={<Add/>}>Adicionar</Button>
                  </Grid>
                </div>
              </Grid>
            </Box>
          </Paper>
        </Container> 
      </div>
    )
}
