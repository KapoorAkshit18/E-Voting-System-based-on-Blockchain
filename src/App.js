
import * as ReactBootStrap from "react-bootstrap";
import { useState, useEffect } from "react";
function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [isoff, setOff] = useState(false);
  const [loading, setLoading] = useState(false);


  return (
    <div
      className="mx-auto p-4 text-light  "
      style={{
        width: 1000,
        marginTop: 25,
        backgroundColor: "rgb(0,2,255)",
      }}
    >
      <p className="text-center h5 text-warning p-2">
       E-Voting System based on Blockchain 
      </p>
      <div className="d-flex flex-col justify-content-between">
        <button
          
          id="connectbtn"
          className="btn btn-success mx-2"
        >
          {!loading ? (
            "Connect"
          ) : (
            <ReactBootStrap.Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </button>

        <button
          
          id="Dissconnectbtn"
          className="btn btn-success mx-2"
          disabled={!isoff}
        >
          Disconnect
        </button>
        <h3>Candidates</h3>
        <p>Candidate Name
          Candidate Address
          Voted:
          </p>
          <h3>Candidates</h3>
         <p>Candidate Name
          Candidate Address
          Voted:
        </p>
        <button>Vote to Candidate</button>
        <h3>Voter's Information </h3>
        <p>
        Voter: Akshit Kapoor
        Voter's Address:
        </p>
        <p>
        Voted to: 
        </p>
       

      </div>

      <br></br>
       
      
    </div>
  );
}

export default App;
