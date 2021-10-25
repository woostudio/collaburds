const fs = require('fs');
const buildTarget = process.env.BUILD_TARGET ? process.env.BUILD_TARGET : 'default';
const filePath = './.storybook/preview-head.html';

let rdsAssets = `
  <script type="module" src="build/cds.esm.js"></script>
  <script nomodule src="build/cds.js"></script>
  <link href="build/cds.css" rel="stylesheet" />
`;

// Delete existing preview-head.html file
try {
  var stats = fs.statSync(filePath);
  fs.unlinkSync(filePath);
} catch (err) {
  // No file found
}

// Determine the asset path by build target
const timestamp = Date.now();
switch (buildTarget) {
  case 'www':
    rdsAssets = `
      <script type="module" src="../dist/cds/cds.esm.js?${timestamp}"></script>
      <script nomodule src="../dist/cds/cds.js?${timestamp}"></script>
      <link href="../dist/cds/cds.css?${timestamp}" rel="stylesheet" />
    `;
    break;
  case 'netlify':
    rdsAssets = `
        <script type="module" src="../cds/cds.esm.js?${timestamp}"></script>
        <script nomodule src="../cds/cds.js?${timestamp}"></script>
        <link href="../cds/cds.css?${timestamp}" rel="stylesheet" />
        `;
    break;
  default:
    break;
}

// Create a new assets-path.scss file
fs.writeFileSync(filePath, rdsAssets, function (err) {
  if (err) throw err;
});
