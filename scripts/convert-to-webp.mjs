import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const imagemin = require('imagemin').default;
const imageminWebp = require('imagemin-webp').default ?? require('imagemin-webp');
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = pathDirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const toConvert = [
  join(publicDir, 'c5694789c65c7c22b7f6092f3a355c35-removebg-preview.png'),
  join(publicDir, 'process', 'boxsize.png'),
  join(publicDir, 'process', 'paperboard-sheet.png'),
  join(publicDir, 'process', 'die-board.jpg'),
  join(publicDir, 'process', 'scoring-setup.png'),
  join(publicDir, 'process', 'scoring-machine.png'),
  join(publicDir, 'process', 'top-bottom-lid.png'),
];

async function convert() {
  try {
    for (const input of toConvert) {
      const dir = pathDirname(input);
      const files = await imagemin([input], {
        destination: dir,
        plugins: [imageminWebp({ quality: 85 })],
      });
      console.log('Converted:', input, '->', files[0]?.destinationPath || dir);
    }
    console.log('WebP conversion complete.');
  } catch (e) {
    console.error('Conversion failed:', e.message);
    process.exit(1);
  }
}
convert();
