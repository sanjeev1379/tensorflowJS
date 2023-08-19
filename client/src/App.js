import CodeSnippet from "./artifacts/contracts/CodeSnippet.sol/CodeSnippet.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import CodeSnippetForm from "./components/CodeSnippetForm";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./components/Global.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import { errorToast } from "./components/showToast";


function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        console.log("signer",signer);
        const contract = new ethers.Contract(
          contractAddress,
          CodeSnippet.abi,
          signer
        );
        console.log("contract",await contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
        errorToast('Metamask is not installed!')
        return;
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>
      {/* <div className="App">
        {!modalOpen && (
          <button className="share" onClick={() => setModalOpen(true)}>
            Share
          </button>
        )}
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
        )}

        <p className="text_color">
          Account : {account ? account : "Not connected"}
        </p>
      </div> */}
      <div id="page">
        <Header />

        { loading && <div className="loadingGif">
          <div className="loadingio-spinner-double-ring-3nx0746bf3l">
            <div className="ldio-7q0jl0uyd3">
            <div></div>
            <div></div>
            <div><div></div></div>
            <div><div></div></div>
            </div>
          </div>
        </div> }
        
        <div id="main" className="site-main-desktop site-main-mobile">
          <section id="code" className="contact-section pt-page">
            <div className="section-container">
              <div className="page-heading">
                <h2>Code snippets.</h2>
                <span className="icon__acount"><b>{account}</b></span>
              </div>

              <div className="row mb-70">
                <div className="col-lg-12">
                  <Tabs>
                    <TabList>
                      <Tab>Upload Code Snippets</Tab>
                      <Tab>Display Code Snippets</Tab>
                    </TabList>

                    <TabPanel>
                      <CodeSnippetForm
                        account={account}
                        provider={provider}
                        contract={contract}
                        setLoading={setLoading} />
                    </TabPanel>
                    <TabPanel>
                      <Display 
                        contract={contract} 
                        account={account}
                        setLoading={setLoading} />
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
      </div>
    </>
  );
}

export default App;