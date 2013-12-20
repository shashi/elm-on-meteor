if (Meteor.isClient) {
    (function (Elm) {
            window.onload = function () {
                Elm.fullscreen(Elm.Main);
            };
    })(Elm);
}

if (Meteor.isServer) {
    (function (Elm) {
        new Meteor.Collection("points");
    })(Elm);
}
