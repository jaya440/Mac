import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import TabContainer from '../../components/TabsContainer';
import EnhancedTable from '../../components/Table'
import ToolBar from '../../containers/ToolBar';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    appContainer: {        
      position: 'relative',
    },
    selected: {
        position: 'absolute',
        top: 0,
        right: '20px'
    }
  });
  
  class TabsPanel extends React.Component {
    state = {
      value: 0,
      ListViewSelectedRows: [],
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };

    getSelectedRows = (ListViewSelectedRows) => {
        this.setState({ListViewSelectedRows})
    }
  
    render() {
      const { classes } = this.props;
      const { value, ListViewSelectedRows } = this.state;
  
      return (
        <div className={classes.root}>
            
                
               
            <ToolBar />
               

               

               
                    <AppBar position="static" className={classes.appContainer}>
                        <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="List View" />
                        <Tab label="Schedule View" />
                        <Tab label="Additional Information" href="#basic-tabs" />
                        </Tabs>
                        {value === 0 && <p className={classes.selected}>Selected {ListViewSelectedRows.length}</p>}
                    </AppBar>
                    {value === 0 && <TabContainer>
                        <EnhancedTable source="db.json" getSelectedRows={this.getSelectedRows} />
                    </TabContainer>}
                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                    {value === 2 && <TabContainer>Item Three</TabContainer>}
            
        </div>
      );
    }
  }
  
  TabsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TabsPanel);