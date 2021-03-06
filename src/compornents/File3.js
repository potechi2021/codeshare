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
// import { hljs } from '../highlight.js/lib/core';
// import python from '../highlight.js/lib/languages/python';
// import java from '../highlight.js/lib/languages/java';
// import '../highlight.js/styles/github.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { Emoji } from 'emoji-mart';


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
      width: '400px',
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
    const [badgeCode, setBadgeCode] = React.useState('mada');
    const [Comment, setComment] = React.useState([]);
    const [Form, setForm] = React.useState([]);
    var commentCounter = 0;

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
        
        result.Body.text().then(text => {
          setBadgeCode(text, []);
        }); 
        })()
    },[]);

    
    //comment
    React.useEffect(() =>{
        ;(async () => {
          const newComment = await API.graphql({ query: queries.showCommentByFileId, variables: { FileID: props.value.id }});
          // console.log("comment:", newComment.data.showCommentByFileID.items);
          const comments =  newComment.data.showCommentByFileID.items;
          setComment(comments)
          console.log("comment type:", comments);
        })()
    }, [commentCounter]);

    //?????????????????????
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
        
        commentCounter += 1;
        
        
        setComment(Comment.concat(newComment.data.createCommentTable));
      
      }

    const handleSubmit = useCallback((event, comments) => {
        const target = event.target;
        event.preventDefault();
        console.log("Room handleSubmit");
        //?????????????????????
        addComment(Form)
    });
    //??????????????????
    const handleChange = (event) => {
          console.log(event)
          setForm(event.target.value);
    };

    //????????????ID -> ????????????????????? 
    async function showComment(){
      const newComment = await API.graphql({ query: queries.showCommentByFileId, variables: { FileID: props.value.id }});
      console.log("how :", newComment.data.showCommentByFileID.items)
      return newComment.data.showCommentByFileID.items;
    }

    //?????????????????????????????????
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




    //Emoji add

    async function addEmoji(emojiID){
      const user = await Auth.currentAuthenticatedUser();
      console.log("user : ", user.username)

      const newComment = await API.graphql(
        graphqlOperation(mutations.createEmojiTable, {
          input: {
            FileID: props.value.id,
            Emoji: emojiID,
            UserID: user.username,
          }
        }))
        console.log(newComment)
    }

    return (
      <React.Fragment>
        <body>

        {/* <Button
            onClick={addComment}>
            test
        </Button>
        <Button
            onClick={showComment}>
            test show
        </Button> */}
        {/* <Button
            variant="outlined"
            onClick={addEmoji}>
            test add emoji
        </Button> */}

          <room_main>
          <div className={classes.root}>
              <br />
          <pre style={{ width: '60vw' }}>
            <code className="java"> 
              {badgeCode} 
            </code>
          </pre>
          <br></br>

        {/* ?????????????????? */}
        <div class="comments" >
          <List>
          {Comment.map((data) => {
            return <ListItem>
              <ListItemText>
              {data.UserID} : {data.Comment}
              </ListItemText>
            </ListItem>
          })}
          </List>
        </div>
        <br />

          {/* ?????????????????? */}

          <form onSubmit={handleSubmit}>
              <label>
                ???????????????
                <textarea value={Form} onChange={handleChange}/>
              </label>
              <br />
              <input type="submit" value="???????????????????????????"  />
          </form>

              </div>
              
            
          </room_main>
          <br />
          <br />
          <EmojiStamp value = {props.value}/>


        </body>
      </React.Fragment>
    )
}



function EmojiStamp(props){
  const [emojiList, setEmojiList] = React.useState([]);
  const [EmojiListID, setEmojiListID] = React.useState([]);

  //addEmoji
  async function addEmoji(emojiID){
    const user = await Auth.currentAuthenticatedUser();
    console.log("user : ", user.username)

    const newComment = await API.graphql(
      graphqlOperation(mutations.createEmojiTable, {
        input: {
          FileID: props.value.id,
          Emoji: emojiID,
          UserID: user.username,
        }
      }))
      console.log(newComment)
  }

  
  //Emoji read
  React.useEffect(() =>{
    ;(async () => {
      console.log("fileid", props.value.id)
      const newEmoji = await API.graphql({ query: queries.showEmojiByFileId, variables: { FileID: props.value.id }});
      setEmojiListID(newEmoji.data.showEmojiByFileID.items);
      // await addList(newEmoji.data.showEmojiByFileID.items);
      console.log("this emoji list :", EmojiListID);
    })()
  },[emojiList]);

  function addList(emojiList){
    setEmojiListID(emojiList);
  }

  // const onSelect = emoji => {
  //   console.log({ emoji });
  //   setEmojiList([...emojiList, emoji]);
  // };

  return (
    <>
        {EmojiListID.length
          ? EmojiListID.map((id, i) => (
              <Emoji
                emoji={id.Emoji}
                size={32}
                key={i}
              />
              // JSON.stringify(id)
            ))
          : null}
          <br></br>
        {/* ??????????????? */}
        {<Picker
            onSelect={emoji => {
              console.log({ emoji });
              setEmojiList([...emojiList, emoji.id]);
              addEmoji(emoji.id)
            }}
            native
            i18n={{
              search: '??????',
              categories: {
                search: '????????????',
                recent: '?????????????????????',
                people: '??? & ???',
                nature: '?????? & ??????',
                foods: '????????? & ?????????',
                activity: '?????????????????????',
                places: '?????? & ??????',
                objects: '??????????????????',
                symbols: '??????',
                flags: '???',
                custom: '????????????',
              },
            }}
            style={{
              position: 'absolute',
              zIndex: '1',
            }}
          />}
      </>
      
  );
}



