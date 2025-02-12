import { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export function MySunEditor() {
  const [content, setContent] = useState('');

  return (
    <div>
      <p>SunEditor</p>
      <SunEditor
        setContents={content}
        onChange={setContent}
        setOptions={{
          height: 300,
          buttonList: [
            ['bold', 'italic', 'underline'],
            ['table'],
            ['undo', 'redo'],
            ['removeFormat'],
            ['codeView'],
            ['preview', 'print'],
          ],
          setDefaultStyle: '',
          attributesWhitelist: {
            table: 'cellspacing cellpadding',
            tr: '',
            td: ''
          }
        }}
      />
    </div>
  );
}