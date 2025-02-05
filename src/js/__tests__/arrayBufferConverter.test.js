import ArrayBufferConverter from '../arrayBufferConverter';
import { getBuffer } from '../getBuffer';

describe('ArrayBufferConverter', () => {
  let converter;
  let buffer;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
    buffer = getBuffer();
  });

  test('should load buffer correctly', () => {
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('should convert buffer to string correctly', () => {
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should handle empty buffer', () => {
    const emptyBuffer = new ArrayBuffer(0);
    converter.load(emptyBuffer);
    const result = converter.toString();
    expect(result).toBe('');
  });
});