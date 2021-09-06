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
import {createRoomTable} from '../graphql/mutations' //変更


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
  
export default function Class() {
    const [user] = React.useState();
    const [text, setText] = React.useState('Please write.');
    const classes = useStyles();
    const history = useHistory();
    const handleSubmit = (event) => {
      const target = event.target;
      event.preventDefault();
      alert('入力内容: ' + target.value);
      const newroom = API.graphql(
        graphqlOperation(createRoomTable, {
          input: {
            ClassID: 'a8e5f441-4737-402e-a550-b4bc1fce5a2d',
            RoomName: text.roomname,
            OwnerUserID: '0003',
            Comment: text.comment,
          }
        }))
      console.log(newroom);
      //const roomData = newroom.data.createRoomTable; // createしたクラス情報
      //console.log(roomData);
    };
    return (
        <React.Fragment>
        <div className={classes.root}>
          class</div>    
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

          <label>
            第何回：
            <input type="text"
              name="roomname"
              value={text.roomname}
              onChange={(e) => setText({...text, roomname: e.target.value})}/>
          </label>
          <br></br>
          <label>
            説明：
            <input type="text"
              name="comment"
              value={text.comment}
              onChange={(e) => setText({...text, comment: e.target.value})}/>
          </label>
          <br></br>
          <Button
            variant="outlined"
            onClick={handleSubmit}>
            部屋作成
            </Button>
            <br></br>
        <Button
            variant="outlined"
            onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/room');
                            console.log("click");
                            })
                        }}>
            第１回
          </Button>
        <Button
            variant="outlined"
            onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            history.push('/room');
                            console.log("click");
                            })
                        }}>
            第２回
          </Button>
        </div>
        </React.Fragment>
    )
}