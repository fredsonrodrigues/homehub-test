import React from 'react';
import AppList from '../components/AppList';
import Container from "../components/Container"
import { List, makeStyles, Typography } from '@material-ui/core';
import { useStorage } from '../hooks/useStorage'

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.titlePrimary.main,
        marginBottom: "5px"
    },
    container: {
        justifyContent: "flex-start"
    }
}));

export default function AdoptList() {
    const classes = useStyles();
    const { currentStorage, removeStorage } = useStorage("breeds");
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h5" component="h2">
                <strong>Adoption List</strong>
            </Typography>
            <List dense={false}>
                {currentStorage.map((e, key) =>
                    <AppList key={key} orderKey={key} {...e} removeAction={removeStorage} />
                )}
            </List>
        </Container>
    )
}