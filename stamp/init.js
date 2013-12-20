if (Meteor.isClient) {
    (function (Elm) {
            window.onload = function () {
                Elm.fullscreen(Elm.Main);
            };
    })(Elm);
}

if (Meteor.isServer) {
    var points = new Meteor.Collection("points");
    Meteor.startup(function() {
        points.remove({});
    });
}
