import React, { useEffect, useRef,useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = ({ initialValue, onEditorChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.editor) {
      editorRef.current.editor.setContent(initialValue);
    }
  }, [initialValue]);

  const handleEditorChange = (content, editor) => {
    onEditorChange(content);
  };

  const handleEditorInit = (editor) => {
    editorRef.current = editor;
  };
  const initialVal = "This is default the content";
    const [values, setValues] = useState({
    content: initialVal,
}); 

  return (
    <Editor
      apiKey="1v5askt8qh90ge5ou7z6xi4rx7wb9z4spsiucpzlc6noubyd" // Replace with your TinyMCE API key
      initialValue={initialValue}
      onInit={handleEditorInit}
      init={{
        height: 500,
        directionality: 'ltr', // Set text direction to LTR
        menubar: 'file edit view insert format tools table help',
        plugins: [
          'advlist autolink lists link image imagetools charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
