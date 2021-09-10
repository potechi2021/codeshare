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
import {showFileByRoom} from '../graphql/queries';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { Emoji } from 'emoji-mart';

Amplify.configure(awsconfig); //S3

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
    const { id } = useParams();
    const [roomState, roomSet] = React.useState([]);
    const [value, setvalue] = React.useState([]);
    const [roomIDState, roomIDSet] = React.useState([]);
    const [comments, commentsSet] = React.useState("");
    const [Comment, setComment] = React.useState([]);

    //RoomID
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

    function tabElement(filedata){
      return <File3 value = {filedata}/> 
    }

     //ファイルをアップロード
    async function onChange(e) {
      console.log()
      const file = e.target.files[0];
      console.log(file.name);
      
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

    // ファイルを追加
    async function addFile(filename){

      const newfiletable = await API.graphql(
        graphqlOperation(mutations.createFileTable, {
          input: {
            UserID: 100,
            RoomID: id,
            FileName: filename,
            // Comment: "comment",
          }
        }))
        console.log(newfiletable)
    }


    //コメント一覧

    function getComment(thisFileID){
      return API.graphql({ query: queries.showCommentByFileId, variables: { FileID: thisFileID }});
    }

    async function getCommentBody(thisFileID){
      const newComment = await getComment(thisFileID);
      const comments =  newComment.data.showCommentByFileID.items;
      setComment(comments)
      console.log("comment???:", Comment);
      console.log("fileid???:", thisFileID);
    }

    //コメント投稿
    //     const handleChange = (event) => {
    //     const target = event.target;
    //     const name = target.name;
    //     commentsSet(target[name].value);
    // };
    // const handleSubmit = useCallback((event, comments) => {
    //   const target = event.target;
    //   event.preventDefault();
    //   console.log("Room handleSubmit");
    //   const newcomment = API.graphql(
    //     graphqlOperation(updateClassTable, {
    //       input: {
    //         Comment: comments+target,
    //       }
    //     }))
    //   console.log(newcomment);
    // });

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
            <div>
              <div class="fileUpload">
                <label for="fileUpload">
                  ファイルを選択して下さい
                  <input type="file" onChange={onChange}/>
                </label>
              </div>
              <div class="roomTabs">
                <Tabs>
      
      {roomState.map((data) => {
        return <TabPanel>
        <h2>{data.UserID}</h2>
        <h2>{data.id}</h2>
            {tabElement(data)}


            {/* コメント一覧
            <form onSubmit={handleSubmit}>
              <label>
                コメント:
                <textarea value={value} onChange={handleChange(data.Comment)} />
              </label>
              <input type="submit" value="コメントを追加する" />
            </form>
            <ul>
              {data.Comment.length < 1 ? (
                <div>コメントはありません</div>
              ) : (
                data.Comment.map(comment => <li>{comment}</li>)
              )} 
              </ul> */}
            <EmojiStamp />
            </TabPanel> 
       })}


      </Tabs> 
      <Tabs>
      {/* <input type="file" onChange={onChange}/> */}
     
      <TabList>
      {roomState.map((data) => {
        return <Tab>{data.FileName}</Tab>
       })}
      </TabList>

      
      {roomState.map((data) => {
        return <TabPanel>
        <h2>{data.UserID}</h2>
            {tabElement(data)}
            {/* コメント一覧
            <ul>
              {data.Comment.length < 1 ? (
                <div>コメントはありません</div>
              ) : (
                data.Comment.map(comment => <li>{comment}</li>)
              )}
            </ul> */}
          </TabPanel> 
       })}

                  <TabList>
                  {roomState.map((data) => {
                    return <Tab>{data.FileName}</Tab>
                  })}
                  </TabList>

                  
                  {roomState.map((data) => {
                    return <TabPanel>
                    <h2>{data.UserID}</h2>
                        {tabElement(data.FileName)}
                        {/* コメント一覧
                        <ul>
                          {data.Comment.length < 1 ? (
                            <div>コメントはありません</div>
                          ) : (
                            data.Comment.map(comment => <li>{comment}</li>)
                          )}
                        </ul> */}
                      </TabPanel> 
                  })}

                </Tabs> 
              </div>
            </div>


          </main>
        </body>
      </React.Fragment>
    );
}

function EmojiStamp(){
  const [emojiList, setEmojiList] = React.useState([]);

  // const onSelect = emoji => {
  //   console.log({ emoji });
  //   setEmojiList([...emojiList, emoji]);
  // };
  return (
    <>
        {emojiList.length
          ? emojiList.map(({id}, i) => (
              <Emoji
                emoji={id}
                size={32}
                key={i}
              />
            ))
          : null}
        {/* 絵文字一覧 */}
        {<Picker
            onSelect={emoji => {
              console.log({ emoji });
              setEmojiList([...emojiList, emoji]);
            }}
            native
            i18n={{
              search: '検索',
              categories: {
                search: '検索結果',
                recent: 'よく使う絵文字',
                people: '顔 & 人',
                nature: '動物 & 自然',
                foods: '食べ物 & 飲み物',
                activity: 'アクティビティ',
                places: '旅行 & 場所',
                objects: 'オブジェクト',
                symbols: '記号',
                flags: '旗',
                custom: 'カスタム',
              },
            }}
            style={{
              position: 'absolute',
              zIndex: '1',
            }}
          />}
      </>
      
  );
}



