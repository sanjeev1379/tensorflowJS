import { useState } from "react";
import { toast } from 'react-toastify';
import "./Global.css";
import { errorToast } from "./showToast";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CodeSnippetForm = ({ contract, account, provider }) => {
  const [author, setAuthor] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!author || author == "" || author == null) {
      errorToast('Author is Required!')
      return;
    }

    if(!editorState || editorState == "" || editorState == null) {
      errorToast('Code is Required!')
      return;
    }
    try {
      await contract.add(account,author, editorState);
    } catch (e) {
      console.log("ERROR", e);
      errorToast('Unable to upload code')
      return;
    }
  };

  return (
    <div className="top">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 mb-50">
            <span className="input">
              <input className="input__field cf-validate" type="text" id="author" name="author" onChange={(event)=> setAuthor(event.target.value)} />
              <label className="input__label" for="cf-name">Author *</label>
            </span>
          </div>

          <div className="col-md-12 mb-30">
            <span className="input">
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
              {/* <label className="input__label" for="cf-code">Enter Your Code snippets *</label> */}
            </span>
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" id="cf-submit" name="send_code_snippets" className="btn-main" >Submit Code</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CodeSnippetForm;