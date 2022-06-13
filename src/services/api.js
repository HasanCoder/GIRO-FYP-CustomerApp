const axios = require('axios');
const { Path } = require('../config/Path')


const signUpUser = async (payLoad) => {
    try {
        if (payLoad) {
            const { data } = await axios.post(`${Path.USER_SIGNUP}`, payLoad);
            return data;
        }
        console.log('Unable to find request param');
    } catch (err) {
        console.log(err);
    }
};


const loginUser = async (payLoad) => {
    try {
        if (payLoad) {
            const { data } = await axios.post(`${Path.USER_LOGIN}`, payLoad);
            return data;
        }
        console.log('Unable to find request param');
    } catch (err) {
        console.log(err);
    }
};

const verifyEmail = async (payload) => {
    try {
        if (payload) {
            const { data } = await axios.post(`${Path.USER_VERIFYEMAIL}`, payload);
            return data;
        }
        console.log('Unable to find request param');
    } catch (err) {
        console.log(err);
    }
};

const confirmEmail = async (payload) => {
    try {
        if (payload) {
            const { data } = await axios.post(`${Path.USER_CONFIRMEMAIL}`, payload);
            return data;
        }
        console.log('Unable to find request param');
    } catch (err) {
        console.log(err);
    }
};

export default {
    signUpUser,
    loginUser,
    verifyEmail,
    confirmEmail
}