import { render, fireEvent } from '@testing-library/react'
import Container from './Container'

describe('testing MainAppBar Component', () => {
    const setup = (props) => {
        const utils = render(<Container {...props}>
            <div data-testid="app-container">Teste</div>
        </Container>)
        return utils
    }

    test('returns Container correctly', async () => {
        const { getByTestId } = setup();
        expect(getByTestId("app-container")).toHaveTextContent("Teste");
    });
})