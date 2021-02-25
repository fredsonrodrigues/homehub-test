import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Breed from '../../pages/[pid]'
import useSWR from 'swr'
import breed from '../../mocks/6.json'

jest.mock('next/router', () => ({
    useRouter: () => ({
        query: {
            pid: "6"
        },
    }),
}));

jest.mock('swr', () => jest.fn());
useSWR.mockImplementation(() => ({
    data: breed,
    error: null
}))

const mockSetStorage = jest.fn();
jest.mock('../../hooks/useStorage', () => ({
    useStorage: jest.fn().mockImplementation(() => ({
        setStorage: mockSetStorage
    }))
}));

describe('testing pages - Index', () => {
    const setup = (props) => {
        props = {
            dispatch: jest.fn(),
            state: {
                count: 0
            },
            ...props
        }
        const utils = render(<Breed {...props} />)
        return utils
    }

    test('returns render correctly', async () => {
        const { getByTestId, queryByTestId, queryAllByTestId } = setup();
        expect(queryAllByTestId("app-card-title")).toHaveLength(1);
        expect(getByTestId("app-card-title")).toHaveTextContent("Akita");
        expect(queryByTestId("app-card-details")).toBeTruthy();
    });

    test('returns right action when click adopt button', async () => {
        const { getByTestId } = setup();
        const elementToClick = getByTestId("app-card-adopt-button");
        fireEvent.click(elementToClick);
        expect(mockSetStorage).toHaveBeenCalledTimes(1);
        expect(mockSetStorage).toHaveBeenCalledWith(breed);
    });
})