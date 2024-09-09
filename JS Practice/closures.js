function outer() {
    const outerVar = "Hey, I am the outer variable";

    function inner() {
        const innerVar = "Hey, I am the inner variable";
        console.log(innerVar);
        console.log(outerVar);
    }

    return inner;
}

const innerFn = outer();
innerFn();