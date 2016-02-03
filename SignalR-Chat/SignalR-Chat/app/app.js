$(function () {
    var chat = $.connection.chatHub;

    chat.client.updateUsers = function (userCount, userList) {
        $('#onlineUsersCount').text('Users online: ' + userCount);
        $('#userList').append('<tr id="' + newUser + '"><td>' + newUser + '</td></tr>');
    }

    chat.client.listUsers(function (userList) {

    });

    $.connection.hub.start().done(function () {
        var username = prompt("Insert your username: ");
        chat.server.connect(username);
    });
});