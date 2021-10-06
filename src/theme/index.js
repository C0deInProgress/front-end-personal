import { colors } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
;

const theme = createTheme({
    palette: {
        primary:{
            main: colors.indigo['A400']
        },
        secondary:{
            main: colors.orange['A700']
        }
        }

});

export default theme;