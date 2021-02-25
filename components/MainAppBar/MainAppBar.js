import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, IconButton, Toolbar, Badge } from '@material-ui/core';
import { Storefront } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useStorage } from '../../hooks/useStorage';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
        marginLeft: '5%'
    }
}));

export default function MainAppBar(props) {
    const { currentStorage } = useStorage("breeds");
    const classes = useStyles();
    const router = useRouter();
    const handleMenu = () => router.push(`/adopt-list`);

    useEffect(() => props.dispatch({ type: 'set-initial', val: currentStorage.length }), [currentStorage.length]);

    return (
        <AppBar>
            <Toolbar>
                <Link href="/">
                    <Typography data-testid="app-mainappbar-title" variant="h5" className={classes.title}>
                        DOG<strong>HUB</strong>
                    </Typography>
                </Link>
                <div>
                    <IconButton
                        data-testid="app-mainappbar-menu"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Badge badgeContent={props.state.count} color="error">
                            <Storefront />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

MainAppBar.propTypes = {
    state: PropTypes.shape({
        count: PropTypes.number
    }),
    dispatch: PropTypes.func
}