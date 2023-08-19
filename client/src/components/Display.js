import { useState } from "react";
import "./Global.css";
import draftToHtml from 'draftjs-to-html';
import { errorToast } from "./showToast";

const Display = ({ contract, account, setLoading }) => {
  const [codeSnippits, setCodeSnippits] = useState([]);
  const [otherAddress, setOtherAddress] = useState("");

  const getCodeSnippet = async () => {
    let snippetArray;
    console.log("otherAddress",otherAddress)
    try {
      setLoading(true)
      if (otherAddress) {
        snippetArray = await contract.display(otherAddress);
        console.log(snippetArray);
        setLoading(false)
      } else {
        snippetArray = await contract.display(account);
        setLoading(false)
      }
    } catch (e) {
      console.log("Access Error", e);
      setLoading(false)
      errorToast("You don't have access!")
      return;
    }
    const isEmpty = Object.keys(snippetArray).length === 0;

    if (!isEmpty) {
      // console.log("snippetArray",snippetArray);
      const listOfCodeSnippet = snippetArray.map((item, index)=> {
        if(item.code && item.code != 'undefined' && item.code != undefined && item.code != "" ) {
          const snippetCode = JSON.parse(item.code)
            return (
              <div className="col-md-12 mb-50" key={index}>
                <h5 className="mb-20">Smart Contract by <b>{item.author}</b></h5>
                <pre>
                  <div dangerouslySetInnerHTML={{ __html: draftToHtml(snippetCode) }} />
                </pre>
              </div>
            )
        }
    });
    setCodeSnippits(listOfCodeSnippet);
      
    } else {
      errorToast("No Code Snippits Find for you!")
      return;
    }
  };
  return (
    <>
      <div className="top">
        <div className="row">
          {(codeSnippits && codeSnippits.length > 0) && codeSnippits}
          <div className="col-md-12 mb-50">
            <span className="input">
              <input className="input__field cf-otherAddress" type="text" id="otherAddress" name="otherAddress" onChange={(event)=> setOtherAddress(event.target.value)} />
              <label className="input__label" for="cf-otherAddress">Enter Address *</label>
            </span>
          </div>
          <div className="col-md-12 text-center">
            <button type="button" id="cf-submit" name="fetch_code_snippets" className="btn-main" onClick={getCodeSnippet} >Get Code Snippet</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Display;