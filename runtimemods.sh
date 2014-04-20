if [ -z $1 ]; then
    echo "Usage: $0 runtime-file";
    exit 1;
fi

cat $1 | sed 's/^var Elm/Elm/g' | \
         sed "s/'use strict';//" | \
         sed 's/function \([A|F][0-9]\)/\1 = function/g' \
            > /tmp/elm-meteor-runtime.js

for app in `find ./ -maxdepth 1 -type d`; do
    if [ -e $app/lib/ ]; then
        cp /tmp/elm-meteor-runtime.js $app/lib;
    fi
done
