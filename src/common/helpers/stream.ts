import { error } from './log';

export async function getStringFromStream(
  stream: ReadableStream<Uint8Array | Uint32Array>,
): Promise<string> {
  const decoder = new TextDecoder();

  const reader = stream.getReader();
  let result = '';

  try {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      // Convert the Uint8Array chunk to a string
      const chunkString = decoder.decode(value);

      // Append the chunk to the final result
      result += chunkString;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    error('error converting stream');
  } finally {
    reader.releaseLock();
  }

  return result;
}
