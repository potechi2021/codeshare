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

const drawerWidth = 150;

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
    const [text, setText] = React.useState('Please write.');
    const classes = useStyles();
    const history = useHistory();
    const handleChange = (event) => {
      const target = event.target;
      setText(target.value);
    };
    const handleSubmit = (event) => {
      const target = event.target;
      alert('A name was submitted: ' + target.value);
      event.preventDefault();
    };
    return (
        <React.Fragment>
        <div className={classes.root}>
          makeroom</div>    
        <div>
        <Button
            variant="outlined"
            onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/');
                            console.log("click");
                            })
                        }}>
            マイページに戻る
          </Button>
        <Button
            variant="outlined"
            onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/shareroom');
                            console.log("click");
                            })
                        }}>
            部屋作成！
          </Button>
          <form onSubmit={handleSubmit}>
            <label>
            授業名：
            <input type="text"
              value={text}
              onChange={handleChange}
            />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        </React.Fragment>
    )
}