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
import {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import {useHistory, useParams, withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import File3 from './File3'
import {showFileByRoom} from '../graphql/queries' //変更
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

Amplify.configure(awsconfig);

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
    const tmpRoomid = "10591538-5c32-4605-914d-9918c58aed0f";
    const { id } = useParams();
    const [roomState, roomSet] = React.useState([]);
    const [roomIDState, roomIDSet] = React.useState([]);

    React.useEffect(() =>{
      ;(async () => {
        console.log("Room ID : ", id)
        await setroomid(id)
        console.log(roomIDState)
        const rest = await API.graphql({ query: queries.showFileByRoom, variables: { RoomID: id }});
        roomSet(rest.data.showFileByRoom.items);
      })()
      return () => {
      }
    },[roomIDState])

    function setroomid(id){
      roomIDSet(id)
    }

    function tabElement(name){
      return <File3 value = {name} /> 
    }


     //ファイルをアップロード
    async function onChange(e) {
      console.log()
      const file = e.target.files[0];
      console.log(file.name)

 
      
      try {
        
        await addFile(file.name);
        await Storage.put(file.name, file, {
          // contentType: 'image/' // contentType is optional
          contentType: 'text/plain'
        });


        // await API.graphql({ query: mutations.createFileTable , variables: {input: fileDetails}});

      } catch (error) {
        console.log('Error uploading file: ', error);
      }  
    }

    //ファイルを追加

    async function addFile(filename){

      const newfiletable = await API.graphql(
        graphqlOperation(mutations.createFileTable, {
          input: {
            // id: 1,
            UserID: 100,
            RoomID: id,
            FileName: filename,
            Comment: "comment",
            // createdAt: "2021-09-09T03:37:52.578Z",
            // updatedAt: "2021-09-09T03:37:52.578Z",
            // ownerUserID: 100,
          }
        }))

        console.log(newfiletable)
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

      <Tabs>
      <input type="file" onChange={onChange}/>
     
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
      <Tabs>
      {/* <input type="file" onChange={onChange}/> */}
      <br></br>
     
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



