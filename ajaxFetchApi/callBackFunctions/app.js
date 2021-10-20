const posts = [
    {
        title: 'Post One', body: 'This is post one'
    },
    {
        title: 'Post Two', body: 'This is post two'
    }    
];

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post three', body: 'This is post three'});
// getPosts();

// // there is no post three on the chrome cause there are 2 seconds to create the post but 1 second to get the posts


function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'}, getPosts);