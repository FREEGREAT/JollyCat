

async function getResponse(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let content  = await response.json()
    console.log(content.splice(0,10))
    let avatar = document.querySelector('.profile-info')

    document.getElementById('avatar').src = URL.toString(content[1].url)
    
    
 
  
}


getResponse();
