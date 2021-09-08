import React from 'react';
import Sidebar from '../Sidebar';
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
import {createClassTable} from '../graphql/mutations' //変更

const drawerWidth = 150;

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
  
export default function MakeClass() {
    const [user] = React.useState();
    const [text, setText] = React.useState('Please write.');
    const classes = useStyles();
    const history = useHistory();
    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      setText(target[name].value);
    };
    const handleSubmit = (event) => {
      const target = event.target;
      event.preventDefault();
      alert('入力内容: ' + target.value);
      const newclass = API.graphql(
        graphqlOperation(createClassTable, {
          input: {
            ClassName: text.classname,
            OwnerUserID: '0003',
            Comment: text.comment,
          }
        }))
      console.log(newclass);
      const classData = newclass.data.createClassTable; // createしたクラス情報
      console.log(classData);
    };
    return (
      <React.Fragment>
        <body>
          <header>
            <h1>サービス名</h1>
          </header>
          <main>
            <div class="makeRoomMain">
              <div class="side">
                <Sidebar activeListItem = "mypage"></Sidebar>
              </div>
              <div class="content">
                  {/*
                  <div className={classes.root}>
                    makeroom
                  </div>
                  */}  
                  <div>
                    <div class="myPageButton">
                      <Button
                        variant="outlined"
                        onClick={() => {
                                        Auth.currentAuthenticatedUser().then((user) => {
                                        history.push('/mypage');
                                        console.log("click");
                                        })
                                    }}>
                        マイページに戻る
                      </Button>
                    </div>
                    <div class="input">
                      <label>
                        授業名：
                        <input type="text"
                          name="classname"
                          value={text.classname}
                          onChange={(e) => setText({...text, classname: e.target.value})}/>
                      </label>
                    </div>
                    <div class="input">
                      <label>
                        説明　：
                        <textarea placeholder="説明を入力"></textarea>
                      </label>
                    </div>
                    <div>
                      
                    </div>
                    <div>
                    <Button
                      variant="outlined"
                      onClick={handleSubmit}>
                      部屋作成
                    </Button>
                    </div>

                  {/* <Button
                      variant="outlined"
                      onClick={() => {
                                      Auth.currentAuthenticatedUser().then((user) => {
                                      //history.push('/shareroom');
                                      console.log("click");
                                      })
                                  }}>
                      部屋作成！
                      </Button> */}
                    {/* <form onSubmit={handleSubmit}>
                      <label>
                      授業名：
                      <input type="text"
                        name="classname"
                        value={text.classname}
                        onChange={handleChange}
                      />
                      </label>
                      <label>
                      説明：
                      <input type="text"
                        name="comment"
                        value={text.comment}
                        onChange={handleChange}
                      />
                      </label>
                      <input type="submit" value="Submit" />
                    </form> */}
                  </div>
              </div>
            </div>
          </main>
        </body>
      </React.Fragment>
    )
}