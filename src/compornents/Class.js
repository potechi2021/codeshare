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
import {listRoomTables} from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Sidebar2 from '../Sidebar2';


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
    const [roomState, roomSet] = React.useState([]);
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

    React.useEffect(() =>{
      ;(async () => {
        console.log("初め")
        const res = await API.graphql(graphqlOperation(listRoomTables)); //非同期 async await
        roomSet(res.data.listRoomTables.items)
        console.log(roomState)
      })()
      return () => {
        console.log("hey")
      }
    })

    return (
        <React.Fragment>
          <body>
            <header>
              <h1>サービス名</h1>
            </header>
            <main>
              <div class="classMain">
                <div class="side">
                  <Sidebar2 activeListItem = "mypage"></Sidebar2>
                </div>
                <div class="content">
                  {/*
                  <div className={classes.root}>
                    class</div>    
                  <div>
                  */}
                  <div class="largeRoomList">
                    <h2>Room一覧</h2>
                    <ul class="largeRoomList2">
                      {roomState.map((data) => {
                        return <a href="link" class="aLargeRoom">
                          <div class="largeRoomBox">
                            <img src="https://loosedrawing.com/wp/wp-content/uploads/2020/07/0487.png" />
                            <p class="largeRoomName">{data.RoomName}</p>
                          </div>
                          <div class="comment">
                            <ul>
                              <li>ルーム名：{data.RoomName}</li>
                              <li>説明　　：{data.Comment}</li>
                            </ul>
                          </div>
                        </a>;
                        
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </body>
        </React.Fragment>
    )
}