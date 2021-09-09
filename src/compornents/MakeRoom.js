import React from 'react';
import Sidebar from '../Sidebar2';
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
import {useHistory, useLocation, useParams, withRouter } from 'react-router';
import {createRoomTable} from '../graphql/mutations' //変更
import Class from './Class'

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
  
function MakeRoom() {
    const [user] = React.useState();
    const [text, setText] = React.useState('Please write.');
    const rooms = useStyles();
    const history = useHistory();
    const location = useLocation();   
    const classId = location.state.classId;
    // const { id } = useParams();
    // console.log(id);
    // const classId = id;
    // const classId = props.value;
    //const classId = props.classId;
    console.log("makeroom");
    console.log(location);
    console.log(classId);
    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      setText(target[name].value);
    };
    const handleSubmit = (event) => {
      const target = event.target;
      event.preventDefault();
      alert('入力内容: ' + target.value);
      const newroom = API.graphql(
        graphqlOperation(createRoomTable, {
          input: {
            ClassID: classId,
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
        <body>
          {/* <header>
            <h1>Code House</h1>
          </header> */}
          <main>
            <div className={rooms.root}>
              makeroom</div>    
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
              {/* <p>state：{location.state.classid}</p> */}
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
                  <Button
                    variant="outlined"
                    onClick={handleSubmit}>
                    部屋作成
                </Button>
            </div>
          </main>
        </body>
      </React.Fragment>
    )
}

export default withRouter(MakeRoom);