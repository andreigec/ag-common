import fs from 'fs';

/**
 * download(fetch) file
 * @param p
 */
export async function fetchFile(p: {
  FILE_URL: string;
  FILE_PATH: string;
}): Promise<void> {
  const response = await fetch(p.FILE_URL);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to download: ${response.statusText}`);
  }

  const fileStream = fs.createWriteStream(p.FILE_PATH);
  const reader = response.body.getReader();

  const write = async (): Promise<void> => {
    const { done, value } = await reader.read();
    if (done) {
      fileStream.close();
      return;
    }
    fileStream.write(value);

    await write();
  };

  await write();
  try {
    fileStream.close();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    //
  }
}
