const ENDPOINT = 'http://localhost:3000/api/v1/users/login';

export default (async function userLoginAsync(email, password) {
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {email: email, password: password},
        })
    });
});
