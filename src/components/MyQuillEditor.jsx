import { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";

const BlockEmbed = Quill.import("blots/block/embed");

class TableEmbed extends BlockEmbed {
  static blotName = "table";
  static tagName = "table";

  static create(value) {
    let node = super.create();
    node.innerHTML = value;
    return node;
  }

  static value(node) {
    return node.innerHTML;
  }
}

Quill.register(TableEmbed);

export function MyQuillEditor() {
  const [content, setContent] = useState("");
  const [viewHtml, setViewHtml] = useState(false);
  const quillRef = useRef();

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.clipboard.dangerouslyPasteHTML(content);
    }
  }, []);

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <button onClick={() => setViewHtml(!viewHtml)}>
        {viewHtml ? "Voltar à Visualização" : "Modo HTML"}
      </button>

      {viewHtml ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "300px" }}
        />
      ) : (
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={handleChange}
          theme="snow"
        />
      )}
    </div>
  );
}
