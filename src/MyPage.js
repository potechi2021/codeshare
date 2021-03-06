import React, { useState, useCallback }  from 'react';
import Sidebar from './Sidebar';
import Amplify from 'aws-amplify';
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
import {listClassTables} from './graphql/queries' //変更
import * as mutations from './graphql/mutations';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    header: {
      width: '100%',
      backgroundColor: "#A1B6EC",
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
  
function MyPage() {
    // const [user] = React.useState();
    const classes = useStyles();
    const history = useHistory();
    const [classState, classSet] = React.useState();
    const [classId, classIdSet] = React.useState('');

    React.useEffect(() =>{
      ;(async () => {
        console.log('Mypage useEffect1');
        const res = await API.graphql(graphqlOperation(listClassTables)); //非同期 async await
        classSet(res.data.listClassTables.items)
        //console.log(classState)
      })()
      return () => {
        console.log(classId)
      }
    },[])
    React.useEffect(() =>{
      console.log('Mypage useEffect2');
      console.log(classId);
        if(classId!==''){
          console.log("Mypage->Class遷移");
          history.push({pathname:'/class/' + classId});
        }
    }, [classId])
    const handleSelected = useCallback((id) => {
      console.log("MyPage handleSelected");
      classIdSet(id);
      console.log(id);
      console.log(classId);
    }, [classId]);
    const returnTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (classState) {
      return (
        <React.Fragment>
          <body>
            <header>
              <h1>Code House</h1>
            </header>
            <main>
              <div class="myPageMain">
                <div class="side">
                  <Sidebar activeListItem = "mypage"></Sidebar>
                </div>
                <div class="content">
                  
                  {/* <div>
                    <Button
                      onClick={() => {
                                        Auth.currentAuthenticatedUser().then((user) => {
                                          history.push('/makeroom');
                                          console.log("click");
                                        })
                                    }}>
                      部屋を作る
                    </Button>
                  </div> */}
                    {/*
                    <Button
                      variant="outlined"
                      onClick={() => {
                                        Auth.currentAuthenticatedUser().then((user) => {
                                          history.push('/class');
                                          console.log("click");
                                        })
                                    }}>
                      関数型言語
                    </Button>
                  */}
                  
                  <div class="largeRoomList">
                    <h2>参加している授業一覧</h2>
                    <ul class="largeRoomList2">
                      {classState.map((data) => {
                        return <a class="aLargeRoom" onClick={(e) => {handleSelected(data.id, e);}}>
                          <div class="largeRoomBox">
                            <img src="https://loosedrawing.com/wp/wp-content/uploads/2020/07/0487.png" />
                            <p class="largeRoomName">{data.ClassName}</p>
                          </div>
                          <div class="comment">
                            <ul>
                              <li>ルーム名：{data.ClassName}</li>
                              <li>説明：{data.Comment}</li>
                            </ul>
                          </div>
                        </a>;
                      })}
                    </ul>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.4/css/all.css" />
                    <div id="page_top"><a href="#"></a></div>
                  </div>
                </div>
                </div>
            </main>
          </body>
        </React.Fragment>
      );
    }else{
      return (
        <React.Fragment>
          <body>
            <header>
              <h1>Code House</h1>
            </header>
            <main>
              <div class="side">
                <Sidebar activeListItem = "mypage"></Sidebar>
              </div>
              <div class="content">
                <div class="largeRoomList">
                  <h2>参加している授業一覧</h2>
                  <p>参加している授業がありません。</p>
                </div>
                <a href="https://www.sixtones.jp/">
                  <div class="largeRoomBox">
                    <img src="https://loosedrawing.com/wp/wp-content/uploads/2020/07/0487.png" />
                    <p class="largeRoomName">room name</p>
                  </div>
                </a>
              </div>
            </main>
          </body>
        </React.Fragment>
      );
    }
}

export default withRouter(MyPage);