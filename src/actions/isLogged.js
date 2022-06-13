export const isLogged = (payload) => {
    return{
        type: 'loggedIn',
        payload
    };
};