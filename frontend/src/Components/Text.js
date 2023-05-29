import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import MainLayout from '../Layout/MainLayout';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleDownload = () => {
    const plainText = content.replace(/<[^>]+>/g, ''); // Remove HTML tags
    const element = document.createElement('a');
    const file = new Blob([plainText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'editor_content.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <MainLayout>
    <h1 style={{marginTop:"110px",marginLeft:"370px"}}>TEXT EDITOR</h1>
    <div style={{backgroundColor:"white",height:"700px",width:"1000px",color:"black",marginTop:"70px"}}>
      <ReactQuill value={content} onChange={handleContentChange} />
      <br />
      
    </div>
    <br />
    <button style={{marginLeft:"400px"}}onClick={handleDownload}>Download</button>
    </MainLayout>
  );
};

export default TextEditor;
