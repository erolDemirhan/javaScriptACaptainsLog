// window methods / objects / properties

//window.console.log(123);

// alert
//window.alert('hello world')

// prompt
//const input = prompt();
//alert(input);

// confirm

//if(confirm('are you sure')){
//    console.log('YES');
//}else{ 
//    console.log('NO');
//}

let width, height;

// outer height and widht

width = window.outerWidth;
height = window.outerHeight;
console.log(width, height);

let innerWidth, innerHeight;

innerHeight = window.innerHeight;
innerWidth = window.innerWidth;

console.log(innerWidth, innerHeight);

console.clear();

// scroll points - scrollbar positioning *** put this <div style="margin-top: 1000px;"></div> inside body tag
val = window.scrollY;
console.log(val);

console.clear();

// location object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.search;

// redirect 

//window.location.href = 'http://google.com';
// window.location.reload();  keeps reload on the related page
console.log(val);
console.clear();

// history object

// window.history.go(-1); go back to the previous page that you visit

val = window.history.length;
console.log(val);
console.clear();

// navigator object
val = window.navigator.appName;
console.log(val);

