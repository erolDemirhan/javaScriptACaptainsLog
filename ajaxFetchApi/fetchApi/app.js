document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getApiText);

function getText(){
    fetch('test.txt').then(function(res){
        return res.text();
    })
    .then(function(data){
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    });
}

function getJson(){
    fetch('post.json').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.body}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(error){
        console.log(error);
    });
}

function getApiText(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(error){
        console.log(error);
    });    
}