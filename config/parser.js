// parser.js
import { parse } from 'path';
import { extname } from 'path';
import { join } from 'path';

interface IFile {
  path: string;
  name: string;
  extension: string;
  directory: string;
}

function getFileDetails(filePath: string): IFile {
  const file = {
    path: filePath,
    name: parse(filePath).name,
    extension: extname(filePath),
    directory: join(parse(filePath).dir, parse(filePath).name)
  };

  return file;
}

export function parseFilePath(filePath: string): IFile {
  if (typeof filePath !== 'string') {
    throw new TypeError('File path must be a string.');
  }

  const file = getFileDetails(filePath);

  return file;
}