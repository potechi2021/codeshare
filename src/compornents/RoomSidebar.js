import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
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
import { useHistory, useLocation } from 'react-router';
import { useState, useRef, useEffect } from 'react';
// import { useLocation } from "@reach/router";

const drawerWidth = 150;
const MAX_POST_CONTENT_LENGTH = 140;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'relative',
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  textField: {
    width: drawerWidth,
  },
  list: {
    width: 100,
  },
}));

export default function RoomSidebar({activeListItem}) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const signOut = () => {
        Auth.signOut()
          .then(data => console.log(data))
          .catch(err => console.log(err));
      }

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen1_1, setIsOpen1_1] = useState(false);
    const [isOpen1_2, setIsOpen1_2] = useState(false);
    const [isOpen2_1, setIsOpen2_1] = useState(false);
    const [isOpen2_2, setIsOpen2_2] = useState(false);
    const [isOpen3_1, setIsOpen3_1] = useState(false);
    const [isOpen3_2, setIsOpen3_2] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);
    
    function testClick(){
        console.log("location:", location);
        console.log("location pathname:", location.pathname);
        console.log("https://master.d3t4uee5vnvism.amplifyapp.com/#" + location.pathname)
        const url = "https://master.d3t4uee5vnvism.amplifyapp.com/#" + location.pathname;
        return url;
    }

    function copyToClipboard() {
        // コピー対象をJavaScript上で変数として定義する
        var copyTarget = document.getElementById("copyTarget");

        // コピー対象のテキストを選択する
        copyTarget.select();

        // 選択しているテキストをクリップボードにコピーする
        document.execCommand("Copy");

        // コピーをお知らせする
        alert("コピーできました！ : " + copyTarget.value);
    }


    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen2(false);
          }
      };

    return (
            // <input id="copyTarget" type="text" value="コピー対象の文言" readonly>
            // <button onclick="copyToClipboard()">Copy text</button>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
                <List>
                    <ListItem key='logout'>
                        <ListItemText primary={
                            <Button
                            variant="outlined"
                            onClick={signOut}
                            fullWidth
                            >
                            Logout
                            </Button>
                        } />
                    </ListItem>

                    <div>
                        <span>
                            <ListItem>
                                <ListItemText primary={
                                    <Button
                                    onClick={testClick()}
                                    >
                                        test
                                    </Button>
                                } />

                            </ListItem>
                        </span>

                        {/*
                        <span>
                            <ListItem>
                                <ListItemText primary={
                                    <input id="copyTarget" type="text" value={testClick()} readonly></input>
                                    // <Button
                                    //  onClick={testClick()}
                                    //  >
                                    //      test
                                    //  </Button>
                                } />

                            </ListItem>
                        </span>
                        */}
                        
                        <span>
                            <ListItem>
                                <ListItemText primary={
                                    <Button
                                    onClick={() => setIsOpen1(!isOpen1)}
                                    >
                                    課題1
                                    </Button>
                                } />
                            </ListItem>
                        </span>
                    {isOpen1 && (
                        <div>
                            <div>
                                <Button onClick={() => setIsOpen1_1(!isOpen1_1)}>
                                名前1
                                </Button>

                                {isOpen1_1 && (
                                    <div>
                                        <div>
                                            <Button
                                                selected={activeListItem === 'file1'}
                                                onClick={() => {
                                                    Auth.currentAuthenticatedUser().then((user) => {
                                                    history.push('/file1');
                                                    console.log("click");
                                                    })
                                                }}
                                                key='file1'
                                            >
                                                  file1
                                              </Button>
                                        </div>
                                        <div>
                                            <Button
                                                selected={activeListItem === 'file2'}
                                                onClick={() => {
                                                    Auth.currentAuthenticatedUser().then((user) => {
                                                    history.push('/file2');
                                                    console.log("click");
                                                    })
                                                }}
                                                key='file2'
                                            >
                                              file2
                                              </Button>
                                        </div>
                                        <div>
                                            <Button>ファイル3</Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <Button onClick={() => setIsOpen1_2(!isOpen1_2)}>
                                名前2
                                </Button>

                                {isOpen1_2 && (
                                    <div>
                                        <div>
                                            <Button>ファイル1</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル2</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル3</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <span>
                        <ListItem>
                            <ListItemText primary={
                                <Button
                                onClick={() => setIsOpen2(!isOpen2)}
                                >
                                課題2
                                </Button>
                            } />
                        </ListItem>
                    </span>

                    {isOpen2 && (
                        <div>
                            <div>
                                <Button onClick={() => setIsOpen2_1(!isOpen2_1)}>
                                名前1
                                </Button>

                                {isOpen2_1 && (
                                    <div>
                                        <div>
                                            <Button>ファイル1</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル2</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル3</Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <Button onClick={() => setIsOpen2_2(!isOpen2_2)}>
                                名前2
                                </Button>

                                {isOpen2_2 && (
                                    <div>
                                        <div>
                                            <Button>ファイル1</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル2</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル3</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <span>
                        <ListItem>
                            <ListItemText primary={
                                <Button
                                onClick={() => setIsOpen3(!isOpen3)}
                                >
                                課題3
                                </Button>
                            } />
                        </ListItem>
                    </span>

                    {isOpen3 && (
                        <div>
                            <div>
                                <Button onClick={() => setIsOpen3_1(!isOpen3_1)}>
                                名前1
                                </Button>

                                {isOpen3_1 && (
                                    <div>
                                        <div>
                                            <Button>ファイル1</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル2</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル3</Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <Button onClick={() => setIsOpen3_2(!isOpen3_2)}>
                                名前2
                                </Button>

                                {isOpen3_2 && (
                                    <div>
                                        <div>
                                            <Button>ファイル1</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル2</Button>
                                        </div>
                                        <div>
                                            <Button>ファイル3</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                
                </List>
        </Drawer>
        )
      }
