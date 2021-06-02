import './App.css';
import Characters from './components/Characters';
import { makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    color: 'white',
    fontFamily: "'Ranchers', cursive",
    textAlign: 'center',
    textShadow: '1px 1px 5px #e89ac7',
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <div className="App">
      <Typography variant='h2' className={classes.title}>Character List</Typography>
      <Characters />
    </div>
  );
}

export default App;
