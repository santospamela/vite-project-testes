import { useState } from 'react';
import JoditEditor from 'jodit-react';

export function MyJoditEditor() {
  const [content, setContent] = useState('');

  return (
    <div>
      <JoditEditor
        value={content}
        onBlur={(newContent) => setContent(newContent)}
        config={{
          buttons: ['bold', 'italic', 'underline', '|', 'table', 'undo', 'redo', 'source'],
          height: 400,
        }}
      />
    </div>
  );
}
