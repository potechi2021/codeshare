import React from 'react';
import Sidebar from './compornents/RoomSidebar';
import Amplify , {Storage} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
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
    header: {
      width: '100%',
    },
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

  Amplify.configure(awsconfig);
  
export default function File1() {
    const [user] = React.useState();
    const classes = useStyles();
    const history = useHistory();

        //ファイルをアップロード
        async function onChange(e) {
          console.log()
          const file = e.target.files[0];
          console.log(file.name)
    
          try {
            console.log("1")
            await Storage.put(file.name, file, {
              contentType: 'image/png' // contentType is optional
            });
            console.log("1")
            //s3のurlを取得する
            //movieのカラムを作る
            // await addFile("url")
          } catch (error) {
            console.log('Error uploading file: ', error);
          }  
        }

    return (
      <React.Fragment>
        <header>
          <h1>File1</h1>
        </header>
        <main>
          <Sidebar activeListItem = "file1"></Sidebar>
          <div className={classes.root}>
            file1
          </div>
        </main>
            <input type="file" onChange={onChange}/>
      </React.Fragment>
    )
}