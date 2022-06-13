const CONVEYGO_URL = 'https://conveygo-microservice.herokuapp.com';

const Path = {
    //user
    USER_SIGNUP: `${CONVEYGO_URL}/v1/signup`,
    USER_LOGIN: `${CONVEYGO_URL}/v1/login`,
    USER_GETUSER: `${CONVEYGO_URL}/v1/user/`,
    USER_VERIFYEMAIL: `${CONVEYGO_URL}/v1/verifyemail`,
    USER_CONFIRMEMAIL: `${CONVEYGO_URL}/v1/confirmemail`,

}

export { Path };