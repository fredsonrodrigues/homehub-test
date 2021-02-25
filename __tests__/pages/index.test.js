import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Home from '../../pages/index'
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

describe('testing pages - Index', () => {
    const setup = (props) => {
        const utils = render(<Home {...props} />)
        return utils
    }

    test('returns render correctly', async () => {
        const { queryAllByTestId, queryByTestId } = setup();
        expect(queryAllByTestId("app-card-title")).toHaveLength(4);
        expect(queryByTestId("app-card-details")).toBeFalsy();
    });

    test('returns corretly router call when click button', async () => {
        const { queryAllByTestId } = setup();
        const [firstElememnt] = queryAllByTestId("app-card-action");
        fireEvent.click(firstElememnt);
        expect(mockPush).toHaveBeenCalledTimes(1);
        expect(mockPush).toHaveBeenCalledWith({
            pathname: '/[pid]',
            query: { pid: 6 }
        });
    });
})