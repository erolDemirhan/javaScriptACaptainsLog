document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // create an xhr obj
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET', 'data.txt', true);

    // optional
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }
    
    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
        }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('Request error!');
    }

    xhr.send();

    // readyStateValues
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
}