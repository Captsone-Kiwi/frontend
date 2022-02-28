export async function createUser(fields){
    const response = await fetch('', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username: fields.username,
            emailid: fields.emailid,
            password: fields.password
        }),
    });
    return await response.json();
}