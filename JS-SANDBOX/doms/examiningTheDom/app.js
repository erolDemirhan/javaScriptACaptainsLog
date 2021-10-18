let val;

val = document;
val = document.all;//brings the all tag

console.log(val);

console.clear();

console.log(document.all[0]);
console.log(document.all[1]);
console.log(document.all[2]);

console.clear();

console.log(document.all.length);// brings the number of html element

console.clear();

console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);
console.clear();

console.log(document.forms);
console.clear();

console.log(document.forms[0].id);
console.log(document.forms[0].method);
console.clear();

console.log(document.links);
console.log(document.links[1]);
console.log(document.links[1].className);

console.log(document.images);
console.log(document.scripts);
console.log(document.scripts[2].getAttribute('src'));

console.clear();

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script);
    console.log(script.getAttribute('src'));
});

console.clear();
