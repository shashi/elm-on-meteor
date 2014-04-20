import Mouse
import Window
import DataSource (DataSource, Success, Mutation, Create, mutate, query, dataSource, Doc)

type Point = (Int, Int)

pointSource : DataSource {} [(Doc Point)]
pointSource = dataSource "points"
_ = query pointSource.handle {}

pointSink : DataSource (Mutation Point) b
pointSink = dataSource "points"

_ = mutate pointSink.handle . Create <~ keepWhen Mouse.isDown (0, 0) Mouse.position

points = lift (\x -> case x.response of
            Success v -> (map .body v)
            _ -> []) pointSource.signal
scene (w,h) locs =
    let drawPentagon (x,y) =
        circle 5 |> filled (hsva (toFloat x) 1 1 0.7)
                 |> move (toFloat x - toFloat w / 2, toFloat h / 2 - toFloat y)
    in  layers [ collage w h (map drawPentagon locs)
            , plainText "Drag to draw. Ask others to join!" ]

main = lift2 scene Window.dimensions points
