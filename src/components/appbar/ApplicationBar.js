import React from 'react'
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";

class ApplicationBar extends React.Component {
    render() {
        return (
            <AppBar position='absolute' style={{backgroundColor: '#24a2ee'}}>
                <Toolbar>
                    <Grid container justify={'flex-end'}>
                        <Typography variant="title" color="inherit">
                            IaNiTyy ltd
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default ApplicationBar;