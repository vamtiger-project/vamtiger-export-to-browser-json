import { dirname, basename, resolve as resolvePath } from 'path';
import getFileText from 'vamtiger-get-file-text';
import createFile from 'vamtiger-create-file';
import Args from 'vamtiger-argv/build/main';
import {
    IExportToBrowserJson,
    Extension,
    StringConstant,
    CommandlineArgument,
    CommandlineArgumentShort,
    regex
} from './types';
import getExportText from './get-export-text';

const { cwd: getWorkingDirectory } = process;
const args = new Args();
const { period, backTick } = StringConstant;
const { doubleQuotes } = regex;
const relativeFilePath = args.get(CommandlineArgument.file)
    || args.get(CommandlineArgumentShort.file);
const argumentFile = relativeFilePath && resolvePath(
    getWorkingDirectory(),
    relativeFilePath
);

if (argumentFile) {
    main({file: argumentFile});
}

export default async function main({ file }: IExportToBrowserJson) {
    const directoryPath = dirname(file);
    const fileName = basename(file);
    const exportFileName = [
        fileName,
        Extension.json,
        Extension.js
    ].join(period);
    const exportFileNameJson = [
        fileName,
        Extension.json,
    ].join(period);
    const exportFile = resolvePath(
        directoryPath,
        exportFileName
    );
    const fileText = await getFileText(file);
    const rawText = String.raw`${fileText}`
        .replace(doubleQuotes, backTick);
    const exportFileText = getExportText({
        name: exportFileNameJson,
        fileText: rawText
    });

    createFile(exportFile, exportFileText);
}