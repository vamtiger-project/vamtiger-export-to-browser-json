import { dirname, basename } from 'path';
import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import getFolderContent from 'vamtiger-get-directory-content';
import bash from 'vamtiger-bash';
import exportToBrowserJson from '..';

const filePath = __filename;
const folder = dirname(filePath);
const exportedFilePath = `${filePath}.json.js`;
const exportFileName = basename(exportedFilePath);
const removeExportedFile = `rm ${exportedFilePath}`;

describe('vamtiger-export-to-browser-json', function () {
    before(async function () {
        await exportToBrowserJson({ file: filePath });
    });

    after(async function() {
        await bash(removeExportedFile);
    })

    it('create browser script', async function () {
        const folderContent = await getFolderContent(folder);

        expect(folderContent.includes(exportFileName)).to.be.true;
    });
})