function getName(fn){
    if(typeof(fn)!=='function'){
        throw new Error("This is not a function");
    }
    return fn.name || '(anonymous)';
}

function sayHello() {
    console.log("Hello!");
}

console.log(getName(sayHello));