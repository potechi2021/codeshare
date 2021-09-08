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
        //console.log("初め")
        const res = await API.graphql(graphqlOperation(listClassTables)); //非同期 async await
        classSet(res.data.listClassTables.items)
        //console.log(classState)
      })()
      return () => {
        console.log(classId)
      }
    },[])
    React.useEffect(() =>{
      return () => {
        //console.log(classId);
        //console.log("遷移");
        history.push({pathname:'/class/' + classId});
      }
    }, [classId])
    const handleSelected = useCallback((id) => {
      classIdSet(id);
      console.log(id);
    }, []);
    if (classState) {
      return (
        <React.Fragment>
          <body>
            <header>
              <h1>サービス名</h1>
            </header>
            <main>
              <div class="myPageMain">
                <div class="side">
                  <Sidebar activeListItem = "mypage"></Sidebar>
                </div>
                <div class="content">
                  {/*
                  <div className={classes.root} class="mypage">
                    mypage
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      onClick={() => {
                                        Auth.currentAuthenticatedUser().then((user) => {
                                          history.push('/makeroom');
                                          console.log("click");
                                        })
                                    }}>
                      部屋を作る
                    </Button>
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
                  </div>
                  */}
                  
                  <div class="largeRoomList">
                    <h2>大部屋一覧</h2>
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
              <h1>サービス名</h1>
            </header>
            <main>
              <div class="side">
                <Sidebar activeListItem = "mypage"></Sidebar>
              </div>
              <div class="content">
                <div className={classes.root} class="mypage">
                  mypage
                </div>
                <div>
                  <Button
                    color = "primary"
                    variant="outlined"
                    onClick={() => {
                                      Auth.currentAuthenticatedUser().then((user) => {
                                        history.push('/makeroom');
                                        console.log("click");
                                      })
                                  }}>
                    部屋を作る
                  </Button>
                  <Button
                    color = "primary"
                    variant="outlined"
                    onClick={() => {
                                      Auth.currentAuthenticatedUser().then((user) => {
                                        history.push('/class');
                                        console.log("click");
                                      })
                                  }}>
                    関数型言語
                  </Button>
                </div>
                <div class="largeRoomList">
                  <h2>大部屋一覧</h2>
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