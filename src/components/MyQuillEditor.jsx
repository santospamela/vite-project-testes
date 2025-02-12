import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function MyQuillEditor() {
  const [content, setContent] = useState('');
  const quillRef = useRef();

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <p>Quill Editor</p>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={handleChange}
        theme="snow"
      />
    </div>
  );
};