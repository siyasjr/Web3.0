function bytesToAscii(byteArray){
    return new TextDecoder().decode(byteArray);
}

const arr = new Uint8Array([101,102,103,104,105,106]);
const asc = bytesToAscii(arr);
console.log(asc);