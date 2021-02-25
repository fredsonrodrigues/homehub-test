import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import MainAppBar from './MainAppBar'

const mockPush = jest.fn();
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        push: mockPush
    })),
}));

describe('testing MainAppBar Component', () => {
    const setup = (props) => {
        props = {
            dispatch: jest.fn(),
            state: {
                count: 0
            },
            ...props
        }
        const utils = render(<MainAppBar {...props}/>)
        return utils
    }

    test('returns title MainAppBar correctly', async () => {
        const { getByTestId } = setup();
        expect(getByTestId("app-mainappbar-title")).toHaveTextContent("DOGHUB");
    });

    test('returns right action when click menu', async () => {
        const { getByTestId } = setup();
        const elementToClick = getByTestId("app-mainappbar-menu");
        fireEvent.click(elementToClick);
        expect(mockPush).toHaveBeenCalledTimes(1);
    });
})