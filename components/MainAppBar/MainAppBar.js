import React from 'react';
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

export default function MainAppBar() {
    const { showCount } = useStorage("breeds");
    const classes = useStyles();
    const router = useRouter();
    const handleMenu = () => router.push(`/adopt-list`);

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
                        <Badge badgeContent={showCount()} color="secondary">
                            <Storefront />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
