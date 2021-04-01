let state;
export function manageFriends(state = { friends: [] }, action){
        
        switch (action.type) {
            case 'ADD_FRIEND':
                return {friends: state.friends.push(action.friend)}
            case 'REMOVE_FRIEND':
                return {}
            default:
                return state;
        }
    
}
