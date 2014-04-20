if (Meteor.isClient) {
    (function (Elm) {
            window.onload = function () {
                Elm.fullscreen(Elm.Main);
            };
    })(Elm);
}

if (Meteor.isServer) {
    var messages = new Meteor.Collection("points");
    var messages = new Meteor.Collection("messages");
    var sessions = new Meteor.Collection("sessions");
}
