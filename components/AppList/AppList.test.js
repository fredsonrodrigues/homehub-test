import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import AppList from './AppList'
import breeds from '../../mocks/breeds.json'

describe('testing AppList Component', () => {
    const removeStorage = jest.fn();
    const setup = (props) => {
        const utils = render(
            <>
                {breeds.map((e, key) =>
                    <AppList key={key} orderKey={key} {...e} removeAction={removeStorage} {...props} />
                )}
            </>
        )
        return utils
    }

    test('returns all list corretly', async () => {
        const { queryAllByTestId } = setup();
        expect(queryAllByTestId("app-list-item")).toHaveLength(4);
    });

    test('returns text list correctly', async () => {
        const { queryAllByTestId } = setup();
        const [firstElememnt] = queryAllByTestId("app-list-name");
        expect(firstElememnt).toHaveTextContent("Akita");
    });


    test('returns corretly function call when click button', async () => {
        const { queryAllByTestId } = setup();
        const [firstElememnt] = queryAllByTestId("app-list-action");
        fireEvent.click(firstElememnt);
        expect(removeStorage).toHaveBeenCalledTimes(1);
    });
})