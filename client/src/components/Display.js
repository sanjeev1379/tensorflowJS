import { useState } from "react";
import "./Global.css";
import { errorToast } from "./showToast";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [otherAddress, setOtherAddress] = useState("");

  const getCodeSnippet = async () => {
    let snippetArray;
    console.log("otherAddress",otherAddress)
    try {
      if (otherAddress) {
        snippetArray = await contract.display(otherAddress);
        console.log(snippetArray);
      } else {
        snippetArray = await contract.display(account);
      }
    } catch (e) {
      console.log("Access Error", e);
      errorToast("You don't have access!")
      return;
    }
    const isEmpty = Object.keys(snippetArray).length === 0;

    if (!isEmpty) {
      const strCodeSnippet = snippetArray.toString();
      console.log(strCodeSnippet);
      
    } else {
      errorToast("No Code Snippits Find for you!")
      return;
    }
  };
  return (
    <>
      <div className="top">
        <div className="row">
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