import React from 'react';

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


const drawerWidth = 340;
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
    width: 300,
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
                        selected={activeListItem === 'mypage'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/selectfile');
                            console.log("click");
                            })
                        }}
                        key='mypage'
                    >
                        <ListItemText primary="selectfile" />
                    </ListItem>

                    <ListItem
                        button
                        selected={activeListItem === 'selectfile'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/mypage');
                            console.log("click");
                            })
                        }}
                        key='selectfile'
                    >
                        <ListItemText primary="mypage" />
                    </ListItem>
                </List>
        </Drawer>
        )
      }