"use strict";
function detectType(val) {
    // return val.toLowerCase()
}
function provideId(id) {
    if (!id) {
        console.log("Provide Id");
        return;
    }
    id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
printAll("");
