import React from 'react'
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types'

class PageRedirect extends React.Component {
    render() {
        const {active, to} = this.props;
        return (active) ? <Redirect push to={to}/> : null
    }
}

PageRedirect.propTypes = {
    to: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default PageRedirect;