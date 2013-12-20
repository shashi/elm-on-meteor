Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm)
                {
                  _elm.Main = _elm.Main || {};
                  if (_elm.Main.values)
                  return _elm.Main.values;
                  var N = Elm.Native,
                      _N = N.Utils.make(_elm),
                      _L = N.List.make(_elm),
                      _E = N.Error.make(_elm),
                      _J = N.JavaScript.make(_elm),
                      $moduleName = "Main";
                  var Text = Elm.Text.make(_elm);
                  var Text = Elm.Text.make(_elm);
                  var Basics = Elm.Basics.make(_elm);
                  var Signal = Elm.Signal.make(_elm);
                  var List = Elm.List.make(_elm);
                  var Maybe = Elm.Maybe.make(_elm);
                  var Time = Elm.Time.make(_elm);
                  var Prelude = Elm.Prelude.make(_elm);
                  var Graphics = Graphics || {};
                  Graphics.Element = Elm.Graphics.Element.make(_elm);
                  var Color = Elm.Color.make(_elm);
                  var Graphics = Graphics || {};
                  Graphics.Collage = Elm.Graphics.Collage.make(_elm);
                  var Mouse = Elm.Mouse.make(_elm);
                  var Window = Elm.Window.make(_elm);
                  var Database = Elm.Database.make(_elm);
                  var _op = {};
                  var scene = F2(function (_v0,locs)
                                 {
                                   return function ()
                                          {
                                            switch (_v0.ctor)
                                            {case
                                             "_Tuple2" :
                                               return function ()
                                                      {
                                                        var drawPentagon = function (_v4)
                                                                           {
                                                                             return function ()
                                                                                    {
                                                                                      switch (_v4.ctor)
                                                                                      {case
                                                                                       "_Tuple2" :
                                                                                         return Graphics.Collage.rotate(Basics.toFloat(_v4._0))(Graphics.Collage.move({ctor: "_Tuple2", _0: Basics.toFloat(_v4._0) - Basics.toFloat(_v0._0) / 2, _1: Basics.toFloat(_v0._1) / 2 - Basics.toFloat(_v4._1)})(Graphics.Collage.filled(A4(Color.hsva,
                                                                                                                                                                                                                                                                                                                                      Basics.toFloat(_v4._0),
                                                                                                                                                                                                                                                                                                                                      1,
                                                                                                                                                                                                                                                                                                                                      1,
                                                                                                                                                                                                                                                                                                                                      0.7))(A2(Graphics.Collage.ngon,
                                                                                                                                                                                                                                                                                                                                               5,
                                                                                                                                                                                                                                                                                                                                               20))));}
                                                                                      _E.Case($moduleName,
                                                                                              "between lines 23 and 25");
                                                                                    }();
                                                                           };
                                                        return Graphics.Element.layers(_J.toList([A3(Graphics.Collage.collage,
                                                                                                     _v0._0,
                                                                                                     _v0._1,
                                                                                                     A2(List.map,
                                                                                                        drawPentagon,
                                                                                                        locs)),
                                                                                                  Text.plainText("Click to stamp a pentagon. Ask others to join!")]));
                                                      }();}
                                            _E.Case($moduleName,"between lines 22 and 27");
                                          }();
                                 });
                  var pointCollection = Database.collection("points");
                  var results = A2(Database.select,pointCollection,{_: {}});
                  var points = A2(Signal.lift,
                                  function (x)
                                  {
                                    return function ()
                                           {
                                             switch (x.ctor)
                                             {case
                                              "Success" :
                                                return A2(List.map,
                                                          function (_)
                                                          {
                                                            return _.body;
                                                          },
                                                          x._0);}
                                             return _J.toList([]);
                                           }();
                                  },
                                  results);
                  var main = A3(Signal.lift2,scene,Window.dimensions,points);
                  var clicks = A2(Signal.sampleOn,Mouse.clicks,Mouse.position);
                  var inserts = A2(Signal._op["<~"],
                                   function ($)
                                   {
                                     return Database.mutate(pointCollection)(Database.Create($));
                                   },
                                   clicks);
                  _elm.Main.values = {_op: _op, pointCollection: pointCollection, results: results, points: points, clicks: clicks, inserts: inserts, scene: scene, main: main};
                  return _elm.Main.values;
                };