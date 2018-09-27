import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Select, Button, Grid, TextField, FormControl, MenuItem} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
    send: {
        marginTop: '20px'
    },
});

class ToolBar extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
      <Grid container spacing={8}>
         <Grid item xs={1}>
                <Button variant="contained" color="primary" className={classes.send}>
                Send
                </Button>
        </Grid>
        <Grid item xs={2}>
        <FormControl className={classes.formControl}>
        <Select
            value={this.state.age}
            displayEmpty
            name="age"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Book Meeting Room</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
        <FormControl className={classes.formControl}>
        <TextField
                    id="date"
                    label="Select Date"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
        </FormControl>
        </Grid>
        <Grid item xs={2}>
        <FormControl className={classes.formControl}>
                <TextField
                    id="date"
                    label="Select Date"
                    type="time"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
        </FormControl>
        </Grid>
        <Grid item xs={2}>
        <FormControl className={classes.formControl}>
        <TextField
                    id="date"
                    label="Select Date"
                    type="time"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </FormControl>
        </Grid>
        </Grid>

      </form>
    );
  }
}


export default withStyles(styles)(ToolBar);