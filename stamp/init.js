if (Meteor.isClient) {
    (function (Elm) {
            window.onload = function () {
                if ('debuggerAttach' in Elm) {
                    Elm.fullscreen(Elm.debuggerAttach(Elm.Main));
                } else {
                    Elm.fullscreen(Elm.Main);
                }
            };
    })(Elm);
}

if (Meteor.isServer) {
    var messages = new Meteor.Collection("points");
    var messages = new Meteor.Collection("messages");
    var sessions = new Meteor.Collection("sessions");
}
