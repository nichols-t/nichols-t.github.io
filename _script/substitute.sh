#! /usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
TEMPLATES="$SCRIPT_DIR/../_template"
CONTENT="$SCRIPT_DIR/../_content"

function template() {
    cat "$TEMPLATES/$1"
}

# TEMPLATES: Add new templates here. Must also prepend new envs to the envsubst
# call below
HEAD="$(template head.html)"
HEADER="$(template header.html)"
FOOTER="$(template footer.html)"

# CONTENT: Add new pages here.
declare -a PAGES=(
    "index.html"
    "about.html"
    "arts-and-crafts.html"
    "writings.html"
)

for page in "${PAGES[@]}"; do
    HEAD=$HEAD \
    HEADER=$HEADER \
    FOOTER=$FOOTER \
    envsubst -i "$CONTENT/$page" -o "$page"
done
