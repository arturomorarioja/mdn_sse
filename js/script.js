const SSE_SERVER_URL = 'server/sse.php';

const button = document.querySelector('button');
const evtSource = new EventSource(SSE_SERVER_URL);
console.log(evtSource.withCredentials);
console.log(evtSource.readyState);
console.log(evtSource.url);
const eventList = document.querySelector('ul');

evtSource.onopen = function() {
    console.log('Connection to server opened.');
};

evtSource.onmessage = function(e) {
    const newElement = document.createElement('li');

    newElement.textContent = 'message: ' + e.data;
    eventList.prepend(newElement);
};

evtSource.onerror = function() {
    console.log('EventSource failed.');
};

button.onclick = function() {
    console.log('Connection closed');
    evtSource.close();
};

// Listening for the custom event "ping"
evtSource.addEventListener('ping', function(e) {
    var newElement = document.createElement('li');

    var obj = JSON.parse(e.data);
    newElement.innerHTML = 'ping at ' + obj.time;
    eventList.prepend(newElement);
}, false);