import { getBuffer } from '../getBuffer';

describe('getBuffer', () => {
  test('should return ArrayBuffer with correct content', () => {
    const buffer = getBuffer();
    const bufferView = new Uint16Array(buffer);
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    
    let result = '';
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }

    expect(result).toBe(expectedString);
  });
});