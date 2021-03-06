import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import grunt from './sounds/grunt.wav';
import BackgroundHeader from "../../background/tools.png"


const timAllen = new Audio(grunt); 

const playSound = audioFile => {
  audioFile.play();
}

const BackgroundHead = {
  backgroundImage: 'url('+ BackgroundHeader+')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // height: '100vh',

  }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Chris/Alex/Lex/Joe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
    backgroundImage: 'url(https://countrymusicprep.files.wordpress.com/2020/08/loginimage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },  
  
  paper: {
    marginTop: theme.spacing(),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  form: {
    width: '65%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div style={BackgroundHead}>
    <Container component="main" maxWidth="xs" background='black'>
      <CssBaseline />
      <div className={classes.paper}>
      {/* <Avatar className={classes.orange}>
            TND
        </Avatar> */}
        <Typography component="div" align="center" color="dark">
          <h1>Tool Next Door</h1>
          <h3>Lease the tools you need to get the job done</h3>
          <h3>or</h3>
          <h3>Rent your collection of tools to earn extra cash</h3>
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="dark" />}
            label="Remember me"
          />
          <Button
            onClick={() => playSound(timAllen)}
            type="submit"
            fullWidth
            variant="contained"
            color="Secondary"
            className={classes.submit}
          >
              <RouterLink to="/about">
            Sign In
            </RouterLink>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="secondary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}