import React, { useState } from 'react';
import TinyMCEEditor from './TinyMCEEditor';

const App = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleSave = () => {
    // Perform save action with the content
    console.log('Saving content:', content);
  };

  return (
    
    <div>
      <TinyMCEEditor initialValue={content} onEditorChange={handleEditorChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default App;
