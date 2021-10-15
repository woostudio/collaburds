const fs = require('fs');
const buildTarget = process.env.BUILD_TARGET ? process.env.BUILD_TARGET : 'default';
const filePath = './src/core/variables/_assets-path.scss';

let assetsPath = '';

// Delete existing assets-path.scss file
try {
  var stats = fs.statSync(filePath);
  fs.unlinkSync(filePath);
}
catch(err) {
  // No file found
}

// Determine the asset path by build target
switch(buildTarget) {
  case 'npm': assetsPath = '~@mothershipvc/collabur-ds-boilerplate/dist'; break;
  case 'www': assetsPath = '..'; break;
  default: break;
}

// Create a new assets-path.scss file
fs.writeFileSync(filePath, "$assets-path: '" + assetsPath + "';", function (err) {
  if (err) throw err;
});