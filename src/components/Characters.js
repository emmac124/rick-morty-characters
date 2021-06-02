import React, { useEffect } from 'react';
import Character from './Character';
import { connect } from 'react-redux';
import { fetchAllCharacters } from '../actions';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        marginTop: '2%',
        marginBottom: '2%',
        display: 'flex',
        maxWidth: '100%',
        flexWrap: 'wrap',
    },
})

const Characters = (props) => {

    const classes = useStyles();

    useEffect(() => {
        props.fetchAllCharacters();
      }, [])
    
    return (
        <div className="character-list">
            <Grid container className={classes.mainContainer}>
            {
               props.characters.map(character => (
                    <Character 
                        key={character.id}
                        id={character.id}
                        image={character.image} 
                        name={character.name} 
                        status={character.status} 
                        gender={character.gender} 
                        location={character.location.name}
                        species={character.species}
                    /> 
                )) 
            }
            </Grid>
        </div>
    );
}

  const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
  }
  
  export default connect(mapStateToProps, { fetchAllCharacters })(Characters);