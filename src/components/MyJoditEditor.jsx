import { useState } from 'react';
import JoditEditor from 'jodit-react';

export function MyJoditEditor() {
  const [content, setContent] = useState('');

  return (
    <div>
      <p>JoditEditor</p>
      <JoditEditor
        value={content}
        onBlur={(newContent) => setContent(newContent)}
        config={{
          buttons: ['bold', 'italic', 'underline', '|', 'table', 'undo', 'redo', 'source'],
          height: 400,
          useClasses: false, // Impede a criação de classes automáticas
        }}
      />
    </div>
  );
}
