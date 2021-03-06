import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import Navigation from "../Navigation";
import styles from "../styles";
import Breadcrumbs from "../Breadcrumb";
import { withRouter } from "react-router-dom";

class Page extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.root}>
        <Navigation />
        <main className={classes.content}>
          <div className={classes.toolbar1} />
          {children}
        </main>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  classes: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(withStyles(styles, { withTheme: true })(Page));
