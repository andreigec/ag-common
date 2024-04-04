import { Buffer } from 'buffer';

import { fromBase64, toBase64 } from './string/base64';

export const toBuffer = (ab: ArrayBuffer) => Buffer.from(ab);

export function bufferToArrayBuffer(buffer: Buffer) {
  const arrayBuffer = new ArrayBuffer(buffer.length);
  const view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return arrayBuffer;
}

export function b64ToArrayBuffer(base64: string) {
  const binary_string = fromBase64(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i += 1) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * convert an ArrayBuffer (usually from file.arrayBuffer) to base64. Usually on client side before server send
 * @param buffer
 * @returns
 */
export function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return toBase64(binary);
}

/**
 * convert a base64 string to a binary Buffer. Usually on server side from client sent content
 * @param raw
 * @returns
 */
export const base64ToBinary = (raw: string) => toBuffer(b64ToArrayBuffer(raw));
