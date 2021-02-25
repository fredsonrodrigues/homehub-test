import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import AdoptList from '../../pages/adopt-list'
import useSWR from 'swr'
import breeds from '../../mocks/breeds.json'

jest.mock('swr', () => jest.fn());
useSWR.mockImplementation(() => ({
    data: breeds,
    error: null
}))

const mockPush = jest.fn();
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        push: mockPush
    })),
}));

const mockRemoveStorage = jest.fn();
jest.mock('../../hooks/useStorage', () => ({
    useStorage: jest.fn().mockImplementation(() => ({
        currentStorage: [
            {id: 6, name: "Chow Chow"},
            {id: 16, name: "American Staffordshire Terrier"}
        ],
        removeStorage: mockRemoveStorage
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
        const utils = render(<AdoptList {...props} />)
        return utils
    }

    test('returns render correctly', async () => {
        const { queryAllByTestId } = setup();
        const [firstElememnt, secondElement] = queryAllByTestId("app-list-item");
        expect(firstElememnt).toHaveTextContent("Chow Chow");
        expect(secondElement).toHaveTextContent("American Staffordshire Terrier");
    });

    test('returns corretly router call when click button', async () => {
        const { queryAllByTestId } = setup();
        const [firstElememnt] = queryAllByTestId("app-list-action");
        fireEvent.click(firstElememnt);
        expect(mockRemoveStorage).toHaveBeenCalledTimes(1);
        expect(mockRemoveStorage).toHaveBeenCalledWith(0);
    });
})