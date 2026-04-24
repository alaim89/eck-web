const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const dirs = ['app', 'components'];

dirs.forEach(dir => {
  walk(dir, (filePath) => {
    if (!filePath.endsWith('.tsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');

    if (filePath === 'app/page.tsx') {
      // We already replaced 500 with 600.
      // Replace original 600 with 700.
      const orig600Lines = [26, 41, 74, 212, 215, 218, 221, 224, 245, 248, 251, 254, 257, 293];
      orig600Lines.forEach(lineNum => {
        const idx = lineNum - 1;
        if (lines[idx]) {
          lines[idx] = lines[idx].replace(/text-gray-600/g, 'text-gray-700');
        }
      });
      content = lines.join('\n');
      // Replace 400 with 500
      content = content.replace(/text-gray-400/g, 'text-gray-500');
    } else if (filePath === 'app/solutions/[slug]/page.tsx') {
      // Replace 600 with 700
      content = content.replace(/text-gray-600/g, 'text-gray-700');
      // Replace 500 with 600
      content = content.replace(/text-gray-500/g, 'text-gray-600');
      // Replace 400 with 300 (dark background)
      content = content.replace(/text-gray-400/g, 'text-gray-300');
    } else {
      // Replace 600 with 700
      content = content.replace(/text-gray-600/g, 'text-gray-700');
      // Replace 500 with 600
      content = content.replace(/text-gray-500/g, 'text-gray-600');
      // Replace 400 with 500
      content = content.replace(/text-gray-400/g, 'text-gray-500');
    }

    fs.writeFileSync(filePath, content, 'utf8');
  });
});
console.log('Done');
