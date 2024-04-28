import GestureRecognition from "./components/GestureRecognition";
import FacialLandmarkDetection from "./components/FacialLandmarkDetection";
import "./components/Global.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import PosenetDetection from "./components/PosenetDetection";
import RealTimeObjectDetection from "./components/RealTimeObjectDetection";


function App() {
  return (
    <>
      <div id="page">
        <Header />
        
        <div id="main" className="site-main-desktop site-main-mobile">
          <section id="code" className="contact-section pt-page">
            <div className="section-container">
              <div className="page-heading">
                <h2>TensorFlow JS</h2>
              </div>

              <div className="row mb-70">
                <div className="col-lg-12">
                  <Tabs>
                    <TabList>
                      <Tab>Gesture Hand Recognition</Tab>
                      <Tab>Facial Landmark Detection</Tab>
                      <Tab>Posenet Detection</Tab>
                      <Tab>RealTime Object Detection</Tab>
                    </TabList>

                    <TabPanel>
                      <GestureRecognition />
                    </TabPanel>
                    <TabPanel>
                      <FacialLandmarkDetection />
                    </TabPanel>
                    <TabPanel>
                      <PosenetDetection />
                    </TabPanel>
                    <TabPanel>
                      <RealTimeObjectDetection />
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