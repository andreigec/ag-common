import fs from 'fs';
import path from 'path';

/**
 * Recursively gets all file paths in a directory and its subdirectories.
 *
 * @param {string} dirPath - The path to the directory to search.
 * @param {string} [extension] - Optional file extension to filter by (e.g., 'js', 'txt').
 * @returns {string[]} An array of file paths matching the specified criteria.
 */
export function getAllFiles(dirPath: string, extension?: string): string[] {
  const files: string[] = [];
  if (extension && !extension.startsWith('.')) {
    extension = '.' + extension;
  }

  const getFilesRecursively = (currentPath: string) => {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        getFilesRecursively(entryPath);
      } else if (!extension || path.extname(entryPath) === extension) {
        files.push(entryPath);
      }
    }
  };

  getFilesRecursively(dirPath);
  return files;
}

/**
 * Extracts the file name and extension from a given file path.
 *
 * @param {string} filePath - The absolute or relative file path.
 * @returns {Object} An object with two properties: `fileName` (string) and `extension` (string).
 */
export function getFileNameAndExtension(filePath: string) {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const directory = path.dirname(filePath);

  return {
    fileName: baseName,
    extension: ext.slice(1), // Remove the leading dot from the extension
    directory,
  };
}
