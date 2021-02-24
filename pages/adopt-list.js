import React from 'react';
import AppList from '../components/AppList';
import Container from "../components/Container"
import { List } from '@material-ui/core';
import { useStorage } from '../hooks/useStorage'

export default function AdoptList() {
    const { currentStorage, removeStorage } = useStorage("breeds");
    return (
        <Container>
            <List dense={false}>
                {currentStorage.map((e, key) =>
                    <AppList key={key} orderKey={key} {...e} removeAction={removeStorage} />
                )}
            </List>
        </Container>
    )
}