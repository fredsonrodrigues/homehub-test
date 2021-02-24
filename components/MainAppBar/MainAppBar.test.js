import { render, fireEvent } from '@testing-library/react'
import MainAppBar from './MainAppBar'

describe('testing MainAppBar Component', () => {
    const setup = (props) => {
        const utils = render(<MainAppBar {...props}/>)
        return utils
    }

    test('returns title MainAppBar correctly', async () => {
        const { getByTestId } = setup();
        expect(getByTestId("app-mainappbar-title")).toHaveTextContent("DOGHUB");
    });
})