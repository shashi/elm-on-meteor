import Mouse
import Window
import Database (Collection, collection, Success, select, mutate, Response, Doc, Create)

type Point = (Int, Int)

-- set up data source and sink
pointCollection : Collection Point
pointCollection = collection "points"

results = select pointCollection {}

points = lift (\x -> case x of
                Success v -> (map .body v)
                _ -> []) results

clicks = sampleOn Mouse.clicks Mouse.position

inserts = mutate pointCollection . Create <~ clicks

scene (w,h) locs =
    let drawPentagon (x,y) =
        ngon 5 20 |> filled (hsva (toFloat x) 1 1 0.7)
                  |> move (toFloat x - toFloat w / 2, toFloat h / 2 - toFloat y)
                  |> rotate (toFloat x)
    in  layers [ collage w h (map drawPentagon locs)
            , plainText "Click to stamp a pentagon. Ask others to join!" ]

main = lift2 scene Window.dimensions points
