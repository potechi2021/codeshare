import React from 'react';
import MakeClass from './compornents/MakeClass';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemIcon,
} from '@material-ui/core';
import {Auth, API, graphqlOperation } from 'aws-amplify';
import { useHistory } from 'react-router';


const drawerWidth = 150;
const MAX_POST_CONTENT_LENGTH = 140;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'relative',
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  textField: {
    width: drawerWidth,
  },
  list: {
    width: 100,
  },
}));

export default function Sidebar({activeListItem}) {
    const classes = useStyles();
    const history = useHistory();

    const signOut = () => {
        Auth.signOut()
          .then(data => console.log(data))
          .catch(err => console.log(err));
      }
    
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
                <List>
                    <ListItem key='logout'>
                        <ListItemText primary={
                            <Button
                            variant="outlined"
                            onClick={signOut}
                            fullWidth
                            >
                            Logout
                            </Button>
                        } />
                    </ListItem>

                    <ListItem
                        button
                        selected={activeListItem === 'selectfile'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/class');
                            console.log("click");
                            })
                        }}
                        key='selectfile'
                    >
                        <ListItemText primary="My Class" />
                    </ListItem>

                    <ListItem
                        button
                        selected={activeListItem === 'selectfile'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/makeroom');
                            console.log("click");
                            })
                        }}
                        key='selectfile'
                    >
                        <ListItemText primary="Make Room" />
                    </ListItem>
                </List>
        </Drawer>
        )
      }