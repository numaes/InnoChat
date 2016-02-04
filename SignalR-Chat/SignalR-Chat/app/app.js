$(function () {
    var chat = $.connection.chatHub;

    chat.client.updateUsers = function (userCount, userList) {
        $('#onlineUsersCount').text('Users online: ' + userCount);
        $('#userList').empty();
        userList.forEach(function (username) {
            $('#userList').append('<tr id="' + username + '"><td>' + username + '</td></tr>');
        });
    }

    chat.client.broadcastMessage = function (username, message) {
        $('#messagesArea').append('<li>' + username + ': ' + message);
    }

    $.connection.hub.start().done(function () {
        var username = prompt("Insert your username: ");
        chat.server.connect(username);
    });

    $('#btnSendMessage').click(function(){
        var message = $('#userMessage').val();
        chat.server.send(message);
    });

    var call = function () {
        $.ajax({
            type: "POST",
            url: "http://legoev3api.azurewebsites.net:80/api/Values",
            data: 1,
            
       });
    }

    setInterval(call, 500);

});

