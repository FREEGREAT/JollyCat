const userURL = `https://jsonplaceholder.typicode.com/users`

function sendRequest(method,url,body = null){
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response =>{
        return response.json()
    })

}
const body = {
    name: 'Jorik',
    age: 145
}
sendRequest('POST', userURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

