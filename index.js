function receivesAFunction(callbackFunc){
    callbackFunc()
}
function returnsANamedFunction(){
    const func = ()=>{}
    return func
}
function returnsAnAnonymousFunction(){
    return ()=>{}
}