/* Event listener for the text in the local storage */
document.getElementById("getText").addEventListener("click",getText);

/* Event listener for the users.json users */
document.getElementById("getUsers").addEventListener("click",getUsers);

/* Event listener for the users api externally */
document.getElementById("getPosts").addEventListener("click",getPosts);


/* Event listener for the form which will post the data */
document.getElementById("addPost").addEventListener("submit",addPost);


function getText(){

    fetch('sample.txt')
    .then(res=>{
        return res.text();
    }).then(value=>{
        console.log(value);

        document.getElementById("output").innerHTML = `<p>${value}</p>`;

    })
}

function getUsers(){
    fetch('users.json')
    .then(res=>res.json())
    .then(value=>{
        console.log(value);
        let output = '<h2>Users</h2>';

        value.forEach(function(user){
            output += `
        <ul>
            <li>${user.id}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
        </ul>`;
        })
        document.getElementById("output").innerHTML = output;
    }
    )
}
function getPosts(){


    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>{
        console.log(posts);
        let output = '<h2>Posts</h2>';

        posts.forEach(function(post){
            output += `
        <div>
             <h2>${post.title}</h2>
             <p>${post.body}</p>

        </div>`;
        })
        document.getElementById("output").innerHTML = output;
    }
    )
}

function addPost(e){
    e.preventDefault();


    let title = document.getElementById('title').value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            'Accept':"application/json, text/plain, */*",
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({title:title,body:body})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}
