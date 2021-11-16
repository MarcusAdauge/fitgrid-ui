import { notification } from "antd";

const GENERIC_ERROR_MESSAGE = 'Something went wrong';

export const intercept = {
    req: (req) => {
        req.headers['auth-token'] = sessionStorage.getItem('auth-token') || '';
        return req;
    },
    res: {
        success: (res) => {
            return res.data;
        },
        error: (err) => {
            let description = GENERIC_ERROR_MESSAGE;
            const { message, code } = err.response.data || {};
        
            if (message) {
                description = message;
            } else if (code === 11000) {
                description = 'An entry with similar data already exists';
            }
            
            notification.error({ message: 'Error', description });
            
            console.log('INTERCEPTOR ERROR', err.response.data);
            
            return Promise.reject(err);
        }
    }
};
