import { JsonDocs, JsonDocsComponent, JsonDocsTag } from '@stencil/core/internal';
import fs from 'fs';
import path from 'path'
/**
 * Convert Stencil component doc to collabur friendly doc
 * @param component 
 */
const stencilComponentToCollaburComponent = (component: JsonDocsComponent) => {
  const defaultHtmlPath = path.join(component.dirPath, 'default.html');
  // get data
  const result = {
    tag: component.tag,
    name: component.docs,
    category: component.docsTags.find(x => x.name === 'category')?.text,
    subCategory: component.docsTags.find(x => x.name === 'subCategory')?.text,
    icon: component.docsTags.find(x => x.name === 'icon')?.text,
    hidden: component.docsTags.find(x => x.name === 'hidden') !== undefined,
    slots: component.slots,
    props: component.props.map(p => ({
      name: p.name, attr: p.attr, docs: p.docs, required: p.required, optional: p.optional, values: p.values,
      ['default']: p.default,
      type: p.type.indexOf('|') !== -1 ? 'enum' : p.type,
      ...parseImageUploader(p.docsTags)
    })),
    defaultHtml: fs.existsSync(defaultHtmlPath) ? fs.readFileSync(defaultHtmlPath, 'utf8') : ''
  };
  return result;
}

/**
 * Parse stencile docs to collabur meta data
 */
export default (filePath: string) => {
  const exportPath = path.join(__dirname, filePath);
  if (fs.existsSync(exportPath)) {
    fs.unlinkSync(exportPath);
  }
  return (docs: JsonDocs) => {
    console.log('Generating component metadata');
    // Custom logic goes here
    const result: {
      [key: string]: any
    } = {
      components: []
    };
    result.timestamp = docs.timestamp;
    docs.components.forEach(component => {
      result.components.push(stencilComponentToCollaburComponent(component));
    });
    // save to dist directory
    fs.writeFileSync(exportPath, JSON.stringify(result));
    console.log('Component metadata generated!');
  }
}

/**
 * Parse image settings
 */
function parseImageUploader(docsTags: JsonDocsTag[]): Object {
  if (docsTags.find(x => x.name === 'imageUploader') !== undefined) {
    return {
      imageUploader: {
        imageMaxWidth: docsTags.find(x => x.name === 'imageMaxWidth')?.text,
        imageMaxHeight: docsTags.find(x => x.name === 'imageMaxHeight')?.text,
        imageMinWidth: docsTags.find(x => x.name === 'imageMinWidth')?.text,
        imageMinHeight: docsTags.find(x => x.name === 'imageMinHeight')?.text,
        imageExt: docsTags.find(x => x.name === 'imageExt')?.text,
      }
    }
  }
  return {};
}