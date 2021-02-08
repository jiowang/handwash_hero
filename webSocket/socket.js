var ws;

// Support both the WebSocket and MozWebSocket objects
if ((typeof(WebSocket) == 'undefined') &&
    (typeof(MozWebSocket) != 'undefined')) {
  WebSocket = MozWebSocket;
}

// Create the socket with event handlers
function connectToWebSocket() {
  // Create and open the socket
  ws = new WebSocket("ws://ubuntu1804-002.student.cs.uwaterloo.ca:6437/v4.json");

  // On successful connection
  ws.onopen = function(event) {
    var enableMessage = JSON.stringify({enableGestures: true});
    ws.send(enableMessage); // Enable gestures
    var backgroundMessage = JSON.stringify({background: true});
    ws.send(backgroundMessage); // Get frames in background
    console.log("open");
  };

  // On message received
  ws.onmessage = function(event) {
      var obj = JSON.parse(event.data);
      var str = JSON.stringify(obj, undefined, 2);
      if(obj.id){
          console.log("Frame data for " + obj.id);
      } else {
          console.log("message " + event.data);
      }
  };

  // On socket close
  ws.onclose = function(event) {
    ws = null;
    console.log("close");
  }

  // On socket error
  ws.onerror = function(event) {
    console.log("error");
  };
}

connectToWebSocket();