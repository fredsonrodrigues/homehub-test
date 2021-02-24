import React from 'react';
import { render } from '@testing-library/react'
import Home from '../../pages/index'
import useSWR from 'swr'
import breeds from '../../mocks/breeds.json'

jest.mock('swr', () => jest.fn());
useSWR.mockImplementation(() => ({
    data: breeds,
    error: null
}))

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
})