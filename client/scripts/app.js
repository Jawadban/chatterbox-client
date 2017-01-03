// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/messages',
  init: function () {
    $('.username').on('click', app.handleUsernameClick);
    $('#send').submit(app.handleSubmit);

    // $('#send').on('submit', app.handleSubmit);
  },
  send: function (message) {
    $.ajax({
  // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function () {
        app.fetch();
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch: function () {
    $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/messages',
      data: {order: '-createdAt'},
      contentType: 'application/json',
      success: function (data) {
        console.log(data);
        for (var i = 0; i < data.results.length; i++) {
          var array = filterSentence(data.results[i])

          app.renderMessage(array);
        }
      },
      error: function () {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  clearMessages: function() {
    $('#chats').empty();
  },
  renderMessage: function (message) {
    
   // $('#chats').append('<div class="change"><a href=# class="username">' + message.username + " " + '</a>' + message.text + '</div>');
$('#chats').append('<h5><a href=# class="username">' + message[0] + " " + '</a>' + message[1] + '</h5>');
  },
  renderRoom: function(value) {
    $('#roomSelect').append('<option value=' + value + '>' + value + '</option>');
  },
  handleUsernameClick: function() {

  },
  handleSubmit: function(event) {
    var $username = $('#username').val();
    var $message = $('#message').val();
    var $roomname = myFunction();
    var messages = {

      username: $username,
      text: $message,
      roomname: $roomname
    };
    app.send(messages);
    event.preventDefault();
  }
};

function myFunction() {
  return $('#roomSelect').val();
};
function filterSentence(obj) {
  if (obj.username && obj.text) {
    var username = obj.username.match(/[a-z0-9]+/gi).join(' ');
    var text = obj.text.match(/[a-z0-9]+/gi).join(' '); 
  }
  return [username, text];
}

