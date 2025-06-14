function asciiToBytes(asciiString){
    const arr = [];

    for(let i =0; i<asciiString.length; i++){
        //const char = asciiString[i];
        arr.push(asciiString.charCodeAt(i));
    }
    return new Uint8Array(arr);
}

const str = "ABCDEFG";
const bytes = asciiToBytes(str);
console.log(bytes);
