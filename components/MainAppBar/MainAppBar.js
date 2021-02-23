import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, IconButton, Toolbar, Badge } from '@material-ui/core';
import { Storefront } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
        marginLeft: '5%'
    },
    appBar: {
        background: '#8e9496'
    }
}));

export default function MainAppBar() {
    const classes = useStyles();
    const handleMenu = (event) => {
        console.log("Favoritos");
    };

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>
                    DOG<strong>HUB</strong>
                </Typography>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Badge badgeContent={4} color="secondary">
                            <Storefront />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
