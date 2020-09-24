window.addEventListener('load', function () { // built in function called - w/two parameters
    function loadHtml(page) { //function
        let rawFile = new XMLHttpRequest(); //declared variable = a new request
        rawFile.onreadystatechange = () => { // calling built in function on variable(rawFile)
            if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {// checks "response" http status code
                document.getElementById(page).insertAdjacentHTML('afterbegin', rawFile.responseText);
            }// calls dom / places header.html in the header div // afterbegin parameter of insertadjacentHTML / precreated variable- containing header code
        };

        rawFile.open('GET', page + '.html', true); // opening header.html
        rawFile.setRequestHeader('Content-type', 'text/html');//tells the type of content = html (this case)
        rawFile.send();// performs the request
    };

    loadHtml('header');
    loadHtml('footer');
});