/* eslint-disable react/no-unescaped-entities */
// import logo from './images/logo.png';
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";

function Blog() {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("Blogs.pdf");
    });
  };

  return (
    <div className="wrapper">
      <div className="receipt-box">
        <div className="receipt-actions-div">
          <div className="actions-right">
            <button
              className="receipt-modal-download-button font-semibold btn bg-my-primary border-none"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
                <span><FaDownload className="text-2xl mr-2"/></span>
              {loader ? <span className="text-lg">Downloading</span> : <span className="text-lg">Download</span>}
            </button>
          </div>
        </div>

        {/* actual receipt */}
        <div className="actual-receipt">
          <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
            <h1 className="text-3xl font-semibold text-center text-my-primary">
              Q1. The differences uncontrolled and control components
            </h1>
            <div className="mb-5">
              <p className="text-lg mt-3">
                <span className="text-my-primary font-semibold">
                  Controlled Components :{" "}
                </span>
                The parent component has held over the form data. The DOM itself
                holds control over the data. It does not maintain its internal
                state. It maintains its internal state. It allows validation
                control. It does not allow validation control. It stores the
                current value in the form of props. It stores the current value
                using react ref. It has better control over the form data. It
                has limited control over the form data. Predictable because the
                component handles the form data at every step.
              </p>
            </div>

            <div>
              <p className="text-lg mt-2">
                <span className="text-my-primary font-semibold">
                  Uncontrolled Components :{" "}
                </span>
                The DOM itself holds control over the data. It maintains its
                internal state. It does not allow validation control. It stores
                the current value using react ref. It has limited control over
                the form data. Not predictable because form elements can lose
                their reference or may be changed/ affected by external sources
                during the lifecycle of components.
              </p>
            </div>
          </div>

          <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
            <h1 className="text-3xl font-semibold text-center text-my-primary">
              Q2. How to validate React props using PropTypes
            </h1>
            <div className="mb-5">
                    <p className='text-lg mt-3'>
                        {/* <span className="text-my-primary font-semibold">Controlled Components : </span> */}
                        When developing a React application, you'll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
                </div>
          </div>

          <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
            <h1 className="text-3xl font-semibold text-center text-my-primary">
              Q3. Difference between nodejs and expressjs
            </h1>
            <div className="mb-5">
              <p className="text-lg mt-3">
                <span className="text-my-primary font-semibold">NodeJS: </span>
                Node.js is an event-based, non-blocking, asynchronous I/O
                runtime that uses Google's V8 JavaScript engine and libuv
                library. It is used for developing applications that make heavy
                use of the ability to run JavaScript both on the client as well
                as on the server side and therefore benefit from the
                re-usability of code and the lack of context switching.
              </p>
            </div>

            <div>
              <p className="text-lg mt-2">
                <span className="text-my-primary font-semibold">
                  ExpressJS:{" "}
                </span>
                Express.js is a minimal and flexible Node.js web application
                framework providing a robust set of features for building web
                applications.
              </p>
            </div>
          </div>

          <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
            <h1 className="text-3xl font-semibold text-center text-my-primary">
              Q4. What is custom hook and why we will use custom hook
            </h1>
            <div className="mb-5">
              <p className="text-lg mt-3">
                {/* <span className="text-my-primary font-semibold">Controlled Components : </span> */}
                Hooks were added to React in version 16.8. Hooks allow function
                components to have access to state and other React features.
                Because of this, class components are generally no longer
                needed. Although Hooks generally replace class components, there
                are no plans to remove classes from React.Hooks are JavaScript
                functions that manage the state's behaviour and side effects by
                isolating them from a component. So, we can now isolate all the
                stateful logic in hooks and use (compose them, as hooks are
                functions, too) into the components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
