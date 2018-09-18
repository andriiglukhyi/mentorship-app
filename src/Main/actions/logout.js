import { RSAA } from 'redux-api-middleware';

export const LOGOUT_REQUEST = '@@jwt/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = '@@jwt/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = '@@jwt/LOGOUT_FAILURE';

export const logout = (token) => ({
    [RSAA]: {
        endpoint: '/api/v1/logout/',
        method: 'POST',
        body: JSON.stringify({'token': token}),
        headers: { 'Content-Type': 'application/json' },
        types: [
            LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
        ]
    }
})