function receivesAFunction(funct) {
    return funct();
}

const namedFunct = returnsANamedFunction;
function returnsANamedFunction() {
    return namedFunct;
}

function returnsAnAnonymousFunction(){
    return function(){}
}
