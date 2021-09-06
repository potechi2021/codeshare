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
    Card,
    CardActions,
    CardContent,
    Typography,
    Grid,
  } from '@material-ui/core';
import {Auth, API, graphqlOperation } from 'aws-amplify';
import { useHistory } from 'react-router';

const drawerWidth = 240;

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

function Nametag(){
  return (
    <Button
        size="small"
        varaint="outlined"
    >
        file名
    </Button>
  )
}

function FileCard() {
  return (
    <div>
      <Nametag />
      <Card variant="outlined">
          <CardContent>
              <Typography>
                  fileの中身(コード)
              </Typography>
          </CardContent>
      </Card>
    </div>
  );
}

export default function Room() {
    const [user] = React.useState();
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment>
        <RoomSidebar activeListItem = "file1"></RoomSidebar>

                <div>
                    <Button
                        variant="outlined"
                        onClick={() => {
                                        Auth.currentAuthenticatedUser().then((user) => {
                                        history.push('/shareroom');
                                        console.log("click");
                                        })
                                    }}>
                        シェア
                    </Button>
                </div>

                <div className={classes.root}>
                  room
                </div>
                <div>
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
                <div>
                      <Button
                          variant="outlined">
                          追加
                      </Button>
                </div>
                <Grid container>
                    <FileCard />
                </Grid>
        </React.Fragment>
    )
}
