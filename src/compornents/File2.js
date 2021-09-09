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
import { useHistory } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import File3 from './File3'

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
  //2. ルーム内のファイルとtabをリンクさせる
  //3. サイドバーのファイルをリンクさせる
  //3. サイドバーにファイルのupボタンを作る
  //4. ルーティングをする
  
export default function File2(prop) {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState("hey")
    let filename = 'Hello Function Component!';

    function handleSelect(index, last){
      console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

    function selectTab(index){
      filename = index;
      return filename
    }
  
    React.useEffect(() => {
      setValue("wow")
    }, []);

    const reactElement = (
      <div>
        <h2>title</h2>
        <p>body</p>
        <p>{File3('これが渡した引数です')}</p>
      </div>
    )

   
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
      <div >
      <Tabs
        onSelect={handleSelect}
      >

        <TabList>
          <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>

        <TabPanel>
          <h2>Hello from Foo</h2>
          <File3 value = {selectTab("GammaCorrection.java")} />
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
            <File3 value = {selectTab("repAL-A.py")} />
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
            <File3 value = {selectTab("repAL-A.py")} />
        </TabPanel>

      </Tabs>
      </div>
      
          </main>
        </body>
      </React.Fragment>
    );
}