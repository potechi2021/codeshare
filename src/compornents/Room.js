import React from 'react';
import RoomSidebar from './RoomSidebar';
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
import {useHistory, useParams, withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import File3 from './File3'
import {showFileByRoom} from '../graphql/queries' //変更
import * as queries from '../graphql/queries';


const drawerWidth = 240;

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

  //1. タブ(File3)にファイルのidを渡す -> ファイルの表示
  //2. ルーム内のファイルとtabをリンクさせる -> 部屋のIDを受け取ってfileを表示
  //3. サイドバーのファイルをリンクさせる
  //3. サイドバーにファイルのupボタンを作る
  //4. ルーティングをする
  
export default function Room(prop) {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState("hey")
    let filename = 'Hello Function Component!';
    const tmpRoomId = "10591538-5c32-4605-914d-9918c58aed0f";
    const { Roomid } = useParams();
    var fileArray = []
    const [roomState, roomSet] = React.useState([]);

    React.useEffect(() =>{
      ;(async () => {
        console.log(Roomid)
        const rest = await API.graphql({ query: queries.showFileByRoom, variables: { RoomID: tmpRoomId }});
        console.log(rest.data.showFileByRoom.items[0].FileName)
        roomSet(rest.data.showFileByRoom.items);
        console.log(roomState)
      })()
      return () => {
      }
    },[])
  
    function handleSelect(index, last){
      console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

    function selectTab(index){
      filename = index;
      return filename
    }

    function tabElement(name){
      return <File3 value = {name} /> 
    }

   
    return (

      <React.Fragment>
        <body>
          <header>
            <h1>CodeHouse</h1>
          </header>
          <main>
            <div class="side">
              <RoomSidebar activeListItem = "file1"></RoomSidebar>
            </div>
      
      {/* <Tabs
        onSelect={handleSelect}
      >

        <TabList>
          <Tab>1</Tab>
          <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList> */}

      

          {/* <TabPanel>
          <h2>Hello from Foo</h2>
          <File3 value = {selectTab("GammaCorrection.java")} />
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
            <File3 value = {selectTab("repAL-A.py")} />
          </TabPanel> */}
        

      <Tabs>

     
      <TabList>
      {roomState.map((data) => {
        return <Tab>{data.FileName}</Tab>
       })}
      </TabList>

      
      {roomState.map((data) => {
        return <TabPanel>
        <h2>{data.UserID}</h2>
        <h4>{data.Comment}</h4>
            {tabElement(data.FileName)}
          </TabPanel> 
       })}

      </Tabs> 
          </main>
        </body>
      </React.Fragment>
    );
}



