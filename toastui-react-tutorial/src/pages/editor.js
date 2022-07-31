import React, { createRef } from "react";

import { Editor} from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function editor() {
  const editorRef = createRef();
  const onChange = () => {
    // html 형식으로 작성된 텍스트 가져오기
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };

  return (
    <>
    <div style={{width: "500px", height:"300px", marginLeft: "30%"}}>
      <Editor
        initialValue="hello react editor toast-ui!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        ref={editorRef}
        onChange={onChange}
      />
      </div>
      
    </>
  );
}

export default editor;
