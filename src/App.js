import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import MyPage from './MyPage';
import SelectFile from './SelectFile';
import MakeRoom from './compornents/MakeRoom';
import ShareRoom from './compornents/ShareRoom';
import Class from './compornents/Class';
import Room from './compornents/Room';

import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'; //追加
import CssBaseline from '@material-ui/core/CssBaseline';


//style
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    width: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}))

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1EA1F2',
      contrastText: "#fff",
    },
    background: {
      default: '#15202B',
      paper: '#15202B',
    },
    divider: '#37444C',
  },
  overrides: {
    MuiButton: {
      color: 'white',
    },
  },
  typography: {
    fontFamily: [
      'Arial', 
    ].join(','),
  },
  status: {
    danger: 'orange',
  },
});

Amplify.configure(awsconfig);

const App = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    const classes = useStyles(); //追加

  return authState === AuthState.SignedIn && user ? (
      // <div className="App">
      //     <div>Hello, {user.username}</div>
      //     <AmplifySignOut />
          
      // </div>
      <div className={classes.root} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Switch>
          <Route exact path='/' component={MyPage} />
          <Route exact path='/mypage' component={MyPage} />
          <Route exact path='/selectfile' component={SelectFile} />
          <Route exact path='/makeroom' component={MakeRoom} />
          <Route exact path='/shareroom' component={ShareRoom} />
          <Route exact path='/class' component={Class} />
          <Route exact path='/room' component={Room} />
          <Redirect path="*" to="/" />
          
            {/* <Route exact path='/' component={AllPosts} />
            <Route exact path='/global-timeline' component={AllPosts} />
            <Route exact path='/:userId' component={PostsBySpecifiedUser}/>
            <Redirect path="*" to="/" /> */}
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </div>
    ) : (
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" }
          ]}
        />
      </AmplifyAuthenticator>
  );
}

export default App;