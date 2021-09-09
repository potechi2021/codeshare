import React from 'react';
import RoomSidebar from './RoomSidebar';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut, AmplifyS3Text } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemIcon,
} from '@material-ui/core';
import Amplify , {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { useHistory } from 'react-router';


const drawerWidth = 240;

Amplify.configure(awsconfig);

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
  
export default function File3(props) {
    const [user, setUser] = React.useState();
    const [AuthState, setAuthState] = React.useState();
    const classes = useStyles();
    const history = useHistory();
    const message = 'テスト'

    React.useEffect(() => {
        console.log(props.value)
        console.log(props.value)
        console.log(typeof props.value)
      });

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
       
          } catch (error) {
            console.log('Error uploading file: ', error);
          }  
        }

        const reactElement = (
          <div>
            <p>{props.value}</p>
          </div>
        )

        //classid

        //roomid

    return (
      <React.Fragment>
        <body>

          <main>
              <div className={classes.root}>
                <input type="file" onChange={onChange}/>
                <br />

                {/* {reactElement} */}
                <AmplifyS3Text textKey={props.value} />
              </div>
            
          </main>
        </body>
      </React.Fragment>
    )
}