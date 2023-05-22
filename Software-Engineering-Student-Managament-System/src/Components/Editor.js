// import React, { useRef } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import MainLayout from '../Layout/MainLayout';
// import './css/editor.css';

// export default function App() {
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
  
//   return (

//     <MainLayout>
    
//         <br></br>
//         <br></br>
//         <br></br>
//         <div className="container">
//         <div className="typed-out">Text Editor</div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
        
        
        
//         </div>  
//     { <div className='edit'>
//       <Editor
      
//         apiKey='mbd8iqen7b8osq906f1cvhcl4iw49kbtfwes6kf13bnth9ni'
//         onInit={(evt, editor) => editorRef.current = editor}
        
//         init={{
          
//         //   paddingRight:100,
//         skin: 'oxide-dark',
//          menubar: false,
//           plugins: [
//             'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
//             'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//             'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
//           ],
//           toolbar: 'undo redo | blocks | ' +
//             'bold italic forecolor | alignleft aligncenter ' +
//             'alignright alignjustify | bullist numlist outdent indent | ' +
//             'removeformat | help',
//           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//         }}
//       />
//       </div> }
     
//       </MainLayout>

//   );
// }