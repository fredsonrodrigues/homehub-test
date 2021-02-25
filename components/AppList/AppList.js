import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemSecondaryAction, ListItemText, IconButton, ListItemAvatar, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    listItem: {
      borderRadius: "12px",
      margin: "10px",
      boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 29%), 0px 4px 5px 0px rgb(0 0 0 / 35%), 0px 1px 10px 0px rgb(0 0 0 / 28%)"
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
        <ListItem data-testid="app-list-item" className={classes.listItem} key={orderKey}>
            <ListItemAvatar>
                <Avatar
                    variant="square"
                    className={classes.large}
                    alt={`Avatar n${orderKey}`}
                    src={`/images/${id}.jpg`}
                />
            </ListItemAvatar>
            <ListItemText
                data-testid="app-list-name"
                primary={<strong>{name}</strong>}
                secondary={null}
            />
            <ListItemSecondaryAction data-testid="app-list-action" onClick={() => removeAction(orderKey)}>
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