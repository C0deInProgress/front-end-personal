import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root:{
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
      bordaFina:{
        border: 'outset',
        padding: 3,
        color: 'secondary',
        borderRadius: 10,
      },
      containerCampos:{
        marginLeft: 30
      },
      ajustarAoCentro:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        padding: 10
      },
      ajustarNoEixoY:{
        display: 'flex',
        alignItems: 'center'
      }

});