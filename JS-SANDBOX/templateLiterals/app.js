const firstName = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'San Francisco';
let html;

// without template strings (es5)

html = '<ul><li>Name: '+ firstName +'</li><li>Age: '+ age +'</li><li>Job: '+ job +'</li><li>City: '+ city +'</li></ul>';

html =  '<ul>' +
        '<li>Name: '+ firstName +'</li>'+
        '<li>Age: '+ age +'</li>' +
        '<li>Job: '+ job +'</li>' +
        '<li>City: '+ city +'</li>' +
        '</ul>';

function mantra(){
    return '3emq';
}

// with template strings

html = `
    <ul>
        <li>Name: ${firstName}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City ${city}</li>
        <li>Mantra: ${mantra()}</li>
        <li>${age > 18 ? 'can drive':'can\'t drive'}</li>
    </ul>
`;

document.body.innerHTML = html;

