import React from 'react'
import * as propTypes from "prop-types";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
    marginTop: '20px',
    color: '#ff2023'
};

class Error extends React.Component {
    render() {
        const {message} = this.props;

        return message !== "" ?
            <Grid container justify={'center'} alignContent={'center'}>
                <Typography vartiant variant={'subheading'} style={styles}>{message}</Typography>
            </Grid>
            : null
    }
}

Error.propTypes = {
    message: propTypes.string.isRequired
};

export default Error;