// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/messages',
  init: function () {
  },
  send: function (message) {
    var $username = $('#username').val();
    var $message = $('#message').val();
    var $roomname = myFunction();
    var messages = {
      username: $username,
      text: $message,
      roomname: $roomname
    };
    console.log(messages);
    $.ajax({
  // This is the url you should use to communicate with the parse API server.
      // url: 'https://api.parse.com/1/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
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
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function () {
        console.log('chatterbox: Message sent');
      },
      error: function () {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  clearMessages: function() {
    $('#chats').empty();
  }
};
function myFunction() {
  return $('.rooms').val();
};
