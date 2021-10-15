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
}
catch(err) {
  // No file found
}

// Determine the asset path by build target
switch(buildTarget) {
  case 'www':
    const timestamp = Date.now();
    rdsAssets = `
      <script type="module" src="../dist/cds/cds.esm.js?${timestamp}"></script>
      <script nomodule src="../dist/cds/cds.js?${timestamp}"></script>
      <link href="../dist/cds/cds.css?${timestamp}" rel="stylesheet" />
    `;
    break;
  default: break;
}

// Create a new assets-path.scss file
fs.writeFileSync(filePath, rdsAssets, function (err) {
  if (err) throw err;
});