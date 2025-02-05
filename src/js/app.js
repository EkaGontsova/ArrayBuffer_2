import ArrayBufferConverter from './arrayBufferConverter.js';
import { getBuffer } from './getBuffer.js';

const buffer = getBuffer();
const converter = new ArrayBufferConverter();
converter.load(buffer);
console.log(converter.toString());