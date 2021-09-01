import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      height: '100%',
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    appBar: {
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));
  
export default function MakeRoom() {
    const [user] = React.useState();
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment>
        <div className={classes.root}>
          makeroom</div>    
        <div>
        <Button
            variant="outlined"
            onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/mypage');
                            console.log("click");
                            })
                        }}>
            マイページに戻る
          </Button>
        </div>
        </React.Fragment>
    )
}