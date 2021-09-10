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
import hljs from '../highlight.js/lib/core';
import python from '../highlight.js/lib/languages/python';
import java from '../highlight.js/lib/languages/java';
import '../highlight.js/styles/github.css';


hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);



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
    const [FileObject, setFileObject] = React.useState();
    const classes = useStyles();
    const history = useHistory();
    const [badgeCode, setBadgeCode] = React.useState('nikaera');

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            console.log("user:", user)
        });
    }, []);

    React.useEffect(() => {
        hljs.initHighlighting();
        hljs.initHighlighting.called = false; 
      });

      React.useEffect(() =>{
        ;(async () => {
        const result = await Storage.get( props.value , { download: true });
        console.log("result : ", result)
        result.Body.text().then(text => setFileObject(text)); 
        // console.log("result!!! :", FileObject);
        setBadgeCode(FileObject, []);
        })()
      });

        //ファイルをアップロード
        async function onChange(e) {
          console.log()
          const file = e.target.files[0];
          // console.log(file.name)
    
          try {
            // console.log("1")
            await Storage.put(file.name, file, {
              contentType: 'image/png' // contentType is optional
            });
       
          } catch (error) {
            console.log('Error uploading file: ', error);
          }  
        }

    return (
      <React.Fragment>
        <body>

          <main>
              <div className={classes.root}>
                <br />
                {/* <AmplifyS3Text textKey={props.value} /> */}
                 <pre style={{ width: '80vw' }}>
            <code className="java"> 
              {badgeCode}
            </code>
          </pre>
              </div>
            
          </main>
        </body>
      </React.Fragment>
    )
}