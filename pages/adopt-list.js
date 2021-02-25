import React from 'react';
import PropTypes from 'prop-types';
import AppList from '../components/AppList';
import Container from "../components/Container"
import { List, makeStyles, Typography } from '@material-ui/core';
import { useStorage } from '../hooks/useStorage'
import theme from "../components/Theme";

const useStyles = makeStyles(({
    title: {
        color: theme.palette.titlePrimary.main,
        marginBottom: "5px"
    },
    container: {
        justifyContent: "flex-start"
    }
}));

export default function AdoptList({ dispatch }) {
    const classes = useStyles();
    const { currentStorage, removeStorage } = useStorage("breeds");

    const onRemoveStorage = (breed) => {
        dispatch({ type: 'decrement' });
        removeStorage(breed);
    }

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h5" component="h2">
                <strong>Adoption List</strong>
            </Typography>
            <List dense={false}>
                {currentStorage.map((e, key) =>
                    <AppList key={key} orderKey={key} {...e} removeAction={onRemoveStorage} />
                )}
            </List>
        </Container>
    )
}

AdoptList.propTypes = {
    dispatch: PropTypes.func
}