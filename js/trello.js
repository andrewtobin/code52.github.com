    $().ready(function () {
        $.getJSON('https://trello.com/1/organizations/code52/boards?key=302fed566e89500ff8eafa5a811a7e3b', function (data) {
            $.each(data, function (projkey, projvalue) {

                var todo = 0, doing = 0, prsent = 0, done = 0, other = 0;

                $.getJSON('https://trello.com/1/boards/' + projvalue.id + '/lists?key=302fed566e89500ff8eafa5a811a7e3b', function (listdata) {

                    $.each(listdata, function (listkey, listvalue) {
                        switch (listvalue.name) {
                            case "To Do":
                                todo = listvalue.cards.length;
                                console.log("todo");
                                break;
                            case "Doing":
                                doing = listvalue.cards.length;
                                break;
                            case "Pull Request Sent":
                                prsent = listvalue.cards.length;
                                break;
                            case "Done":
                                done = listvalue.cards.length;
                                break;
                            default:
                                other = listvalue.cards.length;
                                break;
                        }
                    });

                    $("#projects").append('<tr><td id="' + projvalue.id + '"><a href="' + projvalue.url + '">' + projvalue.name + '</a></td><td>' + todo + '</td><td>' + doing + '</td><td>' + prsent + '</td><td>' + done + '</td><td>' + other + '</td><td>' + (todo + doing + prsent + done + other) +'</td></tr>');
                });
            });
        });
    })