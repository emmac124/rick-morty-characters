import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        width: '30%',
        justifyContent: 'center',
        marginBottom: '2%',
        marginLeft: "3%"
    },
    characterCard: {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'column',
        margin: '1%',
        border: '4px solid #e89ac7',
        backgroundImage: "linear-gradient(#e89ac7, #97ce4c)",
        padding: '2%',
        height: '70vh',
    },
    img: {
        margin: '0 auto',
        padding: '3%'
    },
    cardText: {
        fontFamily: "'Raleway', sans-serif",
    },
    boldText: {
        fontWeight: 'bolder',
        fontFamily: "'Ranchers', cursive",
        textShadow: "1px 1px 5px #e89ac7",
    },
    groupedText: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2%'
    },
    summary: {
        fontWeight: 'bolder',
        fontFamily: "'Ranchers', cursive",
        textShadow: "1px 1px 5px #e89ac7",
    }
})

const Character = (props) => {

    const classes = useStyles();

    const {image, name, status, gender, location, species} = props;

    return (
        <Grid container className={classes.mainContainer}>
            <Grid container spacing={6} className={classes.characterCard}>
                <Grid container className="information">
                    <Grid className={classes.img}>
                        <img src={image} alt="character" />
                    </Grid>
                    <Grid className={classes.groupedText}>
                        <Typography variant='h5' className={classes.boldText}>{name}</Typography>
                        <details>
                            <summary className={classes.summary}>Details</summary>
                                <Typography variant='subtitle1' className={classes.cardText}>
                                    <span className={classes.boldText}>Species:</span> {species}
                                </Typography>
                                <Typography variant='subtitle1' className={classes.cardText}>
                                    <span className={classes.boldText}>Status:</span> {status}
                                </Typography>
                                <Typography variant='subtitle1' className={classes.cardText}>
                                    <span className={classes.boldText}>Location:</span> {location}
                                </Typography>
                                <Typography variant='subtitle1' className={classes.cardText}>
                                    <span className={classes.boldText}>Gender:</span> {gender}
                                </Typography>
                        </details>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Character;
