import { useState } from "react";
export default function App() {
  const Student_name = "Gaurav";
  const Student_ID = "041";
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  const updateList = () => {};

  return (
    <div className="container-fluid">
      <h1 className="bg-dark text-light p-2 fs-2">
        MyChatApp{" "}
        <span className="fs-6">
          by {Student_name}_{Student_ID}
        </span>
      </h1>
      <div className="row">
        <div className="col-11">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Let's chat here...."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="col-1">
          <input
            type="button"
            value="Send"
            className="btn btn-primary btn-lg"
            onClick={updateList}
          />
        </div>
      </div>
    </div>
  );
}
