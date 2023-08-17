import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '../../core/README.md';
import pkg from '../../core/package.json';
import OnlyWhenExample from './Example';

const Github = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="react-only-when"
    description={pkg.description}
    version={`v${pkg.version}`}
  >
    <Github href="https://github.com/uiwjs/react-only-when" />
    <Example>
      <OnlyWhenExample />
    </Example>
  </MarkdownPreviewExample>,
);
