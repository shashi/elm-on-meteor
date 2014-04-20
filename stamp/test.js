Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   "use strict";
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Main";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var DataSource = Elm.DataSource.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Mouse = Elm.Mouse.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var Window = Elm.Window.make(_elm);
   var _op = {};
   var scene = F2(function (_v0,
   locs) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 var drawPentagon = function (_v4) {
                    return function () {
                       switch (_v4.ctor)
                       {case "_Tuple2":
                          return Graphics.Collage.move({ctor: "_Tuple2"
                                                       ,_0: Basics.toFloat(_v4._0) - Basics.toFloat(_v0._0) / 2
                                                       ,_1: Basics.toFloat(_v0._1) / 2 - Basics.toFloat(_v4._1)})(Graphics.Collage.filled(A4(Color.hsva,
                            Basics.toFloat(_v4._0),
                            1,
                            1,
                            0.7))(Graphics.Collage.circle(5)));}
                       _E.Case($moduleName,
                       "between lines 21 and 22");
                    }();
                 };
                 return Graphics.Element.layers(_L.fromArray([A3(Graphics.Collage.collage,
                                                             _v0._0,
                                                             _v0._1,
                                                             A2(List.map,
                                                             drawPentagon,
                                                             locs))
                                                             ,Text.plainText("Drag to draw. Ask others to join!")]));
              }();}
         _E.Case($moduleName,
         "between lines 20 and 24");
      }();
   });
   var pointSink = DataSource.dataSource("points");
   var _ = A2(Signal._op["<~"],
   function ($) {
      return DataSource.mutate(pointSink.handle)(DataSource.Create($));
   },
   A3(Signal.keepWhen,
   Mouse.isDown,
   {ctor: "_Tuple2",_0: 0,_1: 0},
   Mouse.position));
   var pointSource = DataSource.dataSource("points");
   var _ = A2(DataSource.query,
   pointSource.handle,
   {_: {}});
   var points = A2(Signal.lift,
   function (x) {
      return function () {
         var _v8 = x.response;
         switch (_v8.ctor)
         {case "Success":
            return A2(List.map,
              function (_) {
                 return _.body;
              },
              _v8._0);}
         return _L.fromArray([]);
      }();
   },
   pointSource.signal);
   var main = A3(Signal.lift2,
   scene,
   Window.dimensions,
   points);
   _elm.Main.values = {_op: _op
                      ,pointSource: pointSource
                      ,pointSink: pointSink
                      ,points: points
                      ,scene: scene
                      ,main: main};
   return _elm.Main.values;
};