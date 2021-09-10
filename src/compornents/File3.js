import React, { useState, useCallback }  from 'react';
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
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';


hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);



const drawerWidth = 240;

Amplify.configure(awsconfig);

const useStyles = makeStyles(theme => ({
    header: {
      width: '100%',
    },
    root: {
      display: 'block',
      height: '100%',
      width: 500,
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
    const [Comment, setComment] = React.useState([]);
    const [Form, setForm] = React.useState([]);

    //user auth
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            console.log("user:", user)
        });
    }, []);

    //file color
    React.useEffect(() => {
        hljs.initHighlighting();
        hljs.initHighlighting.called = false; 
    });

    //file
    React.useEffect(() =>{
        ;(async () => {
        console.log(props.value.FileName)
        const result = await Storage.get( props.value.FileName , { download: true });
        
        result.Body.text().then(text => setFileObject(text)); 
        result.Body.text().then(text => console.log("result : ", text)); 
        setBadgeCode(FileObject, []);
        })()
    },[props.value.id]);
    
    //comment
    React.useEffect(() =>{
        ;(async () => {
          const newComment = await API.graphql({ query: queries.showCommentByFileId, variables: { FileID: props.value.id }});
          console.log("comment:", newComment.data.showCommentByFileID.items);
          const comments =  newComment.data.showCommentByFileID.items;
          setComment(comments)
          console.log("comment！:", Comment);
        })()
    }, []);

    //コメントを追加
    async function addComment(comment){

      const user = await Auth.currentAuthenticatedUser();
      console.log("user : ", user.username)

      const newComment = await API.graphql(
        graphqlOperation(mutations.createCommentTable, {
          input: {
            FileID: props.value.id,
            Comment: comment,
            UserID: user.username,
          }
        }))
        console.log(newComment)
    }

    const handleSubmit = useCallback((event, comments) => {
        const target = event.target;
        event.preventDefault();
        console.log("Room handleSubmit");
        //コメントを追加
        addComment(Form)
    });
    //コメント投稿
    const handleChange = (event) => {
          console.log(event)
          setForm(event.target.value);
    };

    //ファイルID -> コメントを表示 
    async function showComment(){
      const newComment = await API.graphql({ query: queries.showCommentByFileId, variables: { FileID: props.value.id }});
      console.log("how :", newComment.data.showCommentByFileID.items)
      return newComment.data.showCommentByFileID.items;
    }

    //ファイルをアップロード
    async function onChange(e) {
      console.log()
      const file = e.target.files[0];

      try {
        await Storage.put(file.name, file, {
          contentType: 'image/png' // contentType is optional
        });
    
      } catch (error) {
        console.log('Error uploading file: ', error);
      }  
    }

    //Emoji read
    //Emoji add

    return (
      <React.Fragment>
        <body>

        <Button
            variant="outlined"
            onClick={addComment}>
            test
        </Button>
        <Button
            variant="outlined"
            onClick={showComment}>
            test show
        </Button>

          <main>
          <div className={classes.root}>
              <br />
          <pre style={{ width: '60vw' }}>
            <code className="java"> 
              {badgeCode}
            </code>
          </pre>
          <br></br>

        {/* コメント表示 */}
          <List>
          {Comment.map((data) => {
            return <ListItem>
              <ListItemText>
              {data.UserID} : {data.Comment}
              </ListItemText>
            </ListItem>
          })}
          </List>

          {/* コメント送信 */}

          <form onSubmit={handleSubmit}>
              <label>
                コメント:
                <textarea value={Form} onChange={handleChange}/>
              </label>
              <input type="submit" value="コメントを追加する"  />
          </form>

              </div>
            
          </main>

        </body>
      </React.Fragment>
    )
}