#!/bin/sh

if [ -z $1 ]; then
    cd ../Elm
    cabal build
    cd ../elm-on-meteor
    ./runtimemods.sh ../Elm/data/elm-runtime.js
fi
cd chat
elm -o -b=. test.elm --make
