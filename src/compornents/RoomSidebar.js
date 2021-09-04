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
import { useHistory } from 'react-router';
import { useState, useRef, useEffect } from 'react'

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

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen2(false);
          }
      };

    return (
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
