import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function MyQuillEditor() {
  const [editorHtml, setEditorHtml] = useState('');
  const [viewHtml, setViewHtml] = useState(false);
  const quillRef = useRef();

  const handleChange = (value) => {
    setEditorHtml(value);
  };

  const handleHtmlButton = () => {
    // Quando o botão HTML for clicado, trocamos o modo do editor
    setViewHtml(true);
  };

  const handlePreviewButton = () => {
    // Quando o botão Preview for clicado, vemos como o HTML renderizado ficará
    setViewHtml(false);
  };

  const handleSave = () => {
    const html = quillRef.current.getEditor().root.innerHTML;
    console.log("Conteúdo HTML:", html);
    // Aqui você pode salvar ou manipular o HTML
  };

  return (
    <div>
      <div>
        <button onClick={handleHtmlButton}>HTML</button>
        <button onClick={handlePreviewButton}>Preview</button>
        <button onClick={handleSave}>Salvar</button>
      </div>

      {/* Se viewHtml for verdadeiro, mostramos o HTML diretamente */}
      {viewHtml ? (
        <div>
          <textarea
            value={editorHtml}
            onChange={(e) => setEditorHtml(e.target.value)}
            style={{ width: '100%', height: '300px' }}
          />
        </div>
      ) : (
        <div>
          <ReactQuill
            ref={quillRef}
            value={editorHtml}
            onChange={handleChange}
            theme="snow"
          />
        </div>
      )}
    </div>
  );
};