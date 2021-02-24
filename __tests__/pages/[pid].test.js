import React from 'react';
import { render } from '@testing-library/react'
import Breed from '../../pages/[pid]'
import useSWR from 'swr'
import breed from '../../mocks/6.json'

jest.mock('next/router', () => ({
    useRouter: () => ({
        query: {
            pid: 6
        },
    }),
}));

jest.mock('swr', () => jest.fn());
useSWR.mockImplementation(() => ({
    data: breed,
    error: null
}))

describe('testing pages - Index', () => {
    const setup = (props) => {
        const utils = render(<Breed {...props} />)
        return utils
    }

    test('returns render correctly', async () => {
        const { getByTestId, queryByTestId, queryAllByTestId } = setup();
        expect(queryAllByTestId("app-card-title")).toHaveLength(1);
        expect(getByTestId("app-card-title")).toHaveTextContent("Akita");
        expect(queryByTestId("app-card-details")).toBeTruthy();
    });
})