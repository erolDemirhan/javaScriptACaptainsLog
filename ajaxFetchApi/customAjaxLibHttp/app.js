const http = new easyHttp;

// // get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }   
// });

// // get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }   
// });

// create the data
// const data = {
//     title: 'Custom Post',
//     body: 'This is a custom post'
// };

// // create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }      
// });

// Update the post

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, put){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(put);
//     }     
// });

// DELETE POST

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }   
});