const arrayBreeds = [];
export const initialState = { count: arrayBreeds.length };

export function reducer(state, action) {
    switch (action.type) {
        case 'set-initial':
            return { count: action.val };
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
