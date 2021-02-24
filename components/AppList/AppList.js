import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemSecondaryAction, ListItemText, IconButton, ListItemAvatar, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    listItem: {
      borderStyle: "ridge",
      margin: "10px"
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(7),
      margin: "10px"
    },
  }));

export default function AppList ({id, name, orderKey, removeAction}) {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem} key={orderKey}>
            <ListItemAvatar>
                <Avatar
                    variant="square"
                    className={classes.large}
                    alt={`Avatar n${orderKey}`}
                    src={`/images/${id}.jpg`}
                />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={null}
            />
            <ListItemSecondaryAction onClick={() => removeAction(orderKey)}>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

AppList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    orderKey: PropTypes.number,
    removeAction: PropTypes.func
}