/**
 * Text is clear defined as UTF-8 String or Uint<8,16,32> ArrayBuffer
 * new TextEncoder().encode(``) === ArrayBuffer
 * if you process gigabytes use TextEncoder.encodeInto(``,) see: documentation
 * new Uint8Array(arrayBuffer) do not use UintArray.from(arrayBuffer)
 * UintArray.buffer === ArrayBuffer
 * use Object Streams for Strings and byteStreams for arrayBuffer.
 * To Convert a single 'c'.charCodeAt() to handle UTF-16 use ''.codePointAt() see: emojii documentation
 * UTF-16 is the prefered format for everything thats larger then a single Charakter. or Byte Based.
 * note: ...spread operator is equal to for let of loops
 */

const stringToBytes = (str) => new TexteEncoder().encode(str);

// performance on pair and sometimes faster then TextEncoder.encodeInto()
export const transformStringToBytes = { 
  start(){ this.encoder = new TexteEncoder() },
  transform(controller,utfCharacters){ controller.enqueue(this.encoder.encode(utfCharacters)) }
}

// takes arrayBuffer,typedArray,String able to return .text() .arrayBuffer()
const stringToJsBlob = (data) => new Blob([data],{type:'application/javascript'});
// takes arrayBuffer,typedArray,String able to return .text() .blob() .json() 
const stringToJsResponse = {
  transform(controller,data){ controller.enqueue(new Response(stringToJsBlob(data),{headers:{'content-type':'application/javascript'}}) }
}
// same as TextEncoder.encode usefull for char based Streams uses Array not ArrayBuffer.
export const encodeCharsArray = (chars) => chars.split('').map((s)=>s.charCodeAt());
export const concatTypedArray = (arrays) => Uint16Array.from(buffers.flatMap((array)=>[...array]));
export const concatArrayBuffer = (buffers) => Uint16Array.from(buffers.flatMap((buffer)=>[...new Uint16Array(buffer)]));

// Additional good materials as reference https://stackoverflow.com/questions/21647928/javascript-unicode-string-to-hex
