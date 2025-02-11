import { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export function MySunEditor() {
  const [content, setContent] = useState('');

  return (
    <div>
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
        }}
      />
    </div>
  );
}