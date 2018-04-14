import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1
  }),
  flex:{
    flex: 1
  }
  
});

function ArticleItem(props) {
    const { classes } = props;
  return (
    <div>
      <Paper elevation={4} className={classes.root}>
        <Typography variant="headline" component="h1" className={classes.flex}>
          {props.articleText}
        </Typography>
        <Button variant="raised" color="secondary" >Save Article</Button>
      </Paper>
    </div>
  );
}


export default withStyles(styles)(ArticleItem);