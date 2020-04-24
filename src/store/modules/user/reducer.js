export default function user(state = {}, action) {
    switch (action.type) {
        case 'ADD_USER_TOKEN':
            return {
                token: action.token,
                ...state
            };
        default:
            return state;
    }
}