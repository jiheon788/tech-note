const fs = require('fs');
const path = require('path');

let folderAndFileName = process.argv[2];

if (!folderAndFileName) {
  console.error('Error: Invalid Factor Format (see Readme)');
  process.exit(1);
}

let folderPath = path.dirname(folderAndFileName);
let baseFileName = path.basename(folderAndFileName);
let fileName = baseFileName + '.md';

let filePath = path.join(folderPath, fileName);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

const fileContent = `# ${baseFileName}

...Description...

#### Reference

- [www.google.com](www.google.com)

---

[Back](../README.md)
`;

if (fs.existsSync(filePath)) {
  console.error('Error: File already exists. Choose a different name or delete the existing file.');
  process.exit(1);
} else {
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${filePath} has been created with content!`);
  });
}