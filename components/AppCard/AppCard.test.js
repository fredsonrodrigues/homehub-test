import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AppCard from './AppCard';
import breed from '../../mocks/81.json';

const mockPush = jest.fn();
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        push: mockPush
    })),
}));

describe('testing AppCard Component', () => {
    const setup = (props) => {
        const utils = render(<AppCard breed={breed} {...props} />)
        return utils
    }

    test('returns text title Card correctly', async () => {
        const { getByTestId } = setup();
        expect(getByTestId("app-card-title")).toHaveTextContent("Chow Chow");
    });

    test('returns the correctly amount of chip components on the page', async () => {
        const { queryAllByTestId } = setup();
        expect(queryAllByTestId("app-card-chips")).toHaveLength(4);
    });

    test('returns false when full attribute isnt set', async () => {
        const { queryByTestId } = setup();
        expect(queryByTestId("app-card-details")).toBeFalsy();
        expect(queryByTestId("app-card-adopt-button")).toBeFalsy();
    });

    test('returns true when full attribute is true', async () => {
        const { queryByTestId } = setup({ full: true });
        expect(queryByTestId("app-card-details")).toBeTruthy();
        expect(queryByTestId("app-card-adopt-button")).toBeTruthy();
    });

    test('returns right action when click card', async () => {
        const { getByTestId } = setup();
        const elementToClick = getByTestId("app-card-action");
        fireEvent.click(elementToClick);
        expect(mockPush).toHaveBeenCalledTimes(1);
    });
})