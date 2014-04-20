import Mouse
import Window
import DataSource (DataSource, Success, Mutation, Create, mutate, query, dataSource, Doc)
import Session (SessionVar, NotSet, Value, sessionVar, update)

type Point = (Int, Int)

pointSource = dataSource "points"
pointSink = dataSource "points"
lastPoint = sessionVar "last-point"

_ = query pointSource.handle {}
_ = mutate pointSink.handle . Create <~ sampleOn Mouse.clicks Mouse.position
_ = update lastPoint.handle <~ sampleOn Mouse.clicks Mouse.position

points = lift (\x -> case x.response of
            Success v -> (map .body v)
            _ -> []) pointSource.signal
scene (w,h) locs lp =
    let drawPentagon (x,y) =
        ngon 5 30 |> filled (hsva (toFloat x) 1 1 0.7)
                  |> move (toFloat x - toFloat w / 2, toFloat h / 2 - toFloat y)
        drawLastPoint (x, y) =
            circle 100 |> filled (hsva 0 0.7 1 0.9)
                       |> move (toFloat x - toFloat w / 2, toFloat h / 2 - toFloat y)
    in  layers [ collage w h ((drawLastPoint lp) :: (map drawPentagon locs))
            , plainText "Drag to draw. Ask others to join!" ]

point = (\x ->
        case x of 
            NotSet -> (100, 100)
            Value p -> p) <~ lastPoint.signal
main = lift3 scene Window.dimensions points point
