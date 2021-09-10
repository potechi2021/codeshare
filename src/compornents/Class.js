import React, { useState, useCallback }  from 'react';
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
import {useHistory, useParams, withRouter } from 'react-router';
import {createRoomTable} from '../graphql/mutations' //変更
import {listRoomTables} from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Sidebar2 from '../Sidebar2';
import MakeRoom from './MakeRoom';

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
  
function Class() {
    const [user] = React.useState();
    const [text, setText] = React.useState('Please write.');
    const classes = useStyles();
    const history = useHistory();
    const [roomState, roomSet] = React.useState([]);
    const [roomId, roomIdSet] = React.useState('');
    const [classId, classIdSet] = React.useState('');

    const { id } = useParams();
    console.log(id);
        
    React.useEffect(() =>{
      ;(async () => {
        //const classId = id;
        console.log("Class useEffect1");
        const res = await API.graphql(graphqlOperation(listRoomTables)); //非同期 async await
        roomSet(res.data.listRoomTables.items);
        //console.log(roomState)
        classIdSet(id);
        console.log(classId);
      })()
      return () => {
        console.log("hey")
      }
    }, []);
    React.useEffect(() =>{
      console.log("Class useEffect2");
      console.log(classId);
      console.log(roomId);
      if(roomId!==''){
        console.log("Class->Room遷移");
        history.push('/room/' + roomId);
      }
    }, [roomId])
    const handleSelected = useCallback((roomid) => {
      console.log("Class handleSelected");
      roomIdSet(roomid);
      console.log(roomid);
      //history.push('/room/' + roomId);
    }, []);
    const handleClicked = useCallback(() => {
      console.log("Class handleClicked");
      console.log(classId);
      if(classId!=''){
        console.log("Class->MakeRoom遷移");
        history.push({
          pathname: '/makeroom',
          state: { classid: classId }
        });
        //history.push('/makeroom', {classid:classId});
      }
      //classIdSet(classId);
      console.log("click makeroom");
    }, [classId]);

    // const handleSubmit = (event) => {
    //   const target = event.target;
    //   event.preventDefault();
    //   alert('入力内容: ' + target.value);
    //   const newroom = API.graphql(
    //     graphqlOperation(createRoomTable, {
    //       input: {
    //         ClassID: id,
    //         RoomName: text.roomname,
    //         OwnerUserID: '0003',
    //         Comment: text.comment,
    //       }
    //     }))
    //   console.log(newroom);
    //   //const roomData = newroom.data.createRoomTable; // createしたクラス情報
    //   //console.log(roomData);
    // };

    return (
        <React.Fragment>
          <body>
            <header>
              <h1>Code House</h1>
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
                  <Button
                      onClick={handleClicked}>
                  {/* <Button
                      variant="outlined"
                      onClick={() => {Auth.currentAuthenticatedUser().then((user) => {
                                          history.push('/makeroom/' + classId);
                                          console.log("click makeroom");
                                        })
                                    }}> */}
                      Roomを作る
                  </Button>
                  {/* <p>ClassID： {classId}</p> */}
                  <div class="largeRoomList">
                    <h2>Room一覧</h2>
                    <ul class="largeRoomList2">
                      {roomState.map((data) => {
                        return <a class="aLargeRoom" onClick={(e) => {handleSelected(data.id, e);}}>
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
export default withRouter(Class);