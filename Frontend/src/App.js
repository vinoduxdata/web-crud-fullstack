import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const baseURL = "http://localhost:3001";

  const get_id = useRef(null);

  const post_name = useRef(null);
  const post_course = useRef(null);

  const put_id = useRef(null);
  const put_name = useRef(null);
  const put_course = useRef(null);

  const delete_id = useRef(null);

  const [getResult, setGetResult] = useState(null);
  const [postResult, setPostResult] = useState(null);
  const [putResult, setPutResult] = useState(null);
  const [deleteResult, setDeleteResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function getAllData() {
    try {
      console.log("hi");
      const res = await fetch(`${baseURL}/student`);
      console.log(res.ok);
      const data = await res.json();
      const result = {
        data: data,
      };
      console.log(result);
      console.log(res.ok);

      setGetResult(fortmatResponse(result));
    } catch (err) {
      setGetResult(err.message);
    }
  }

  async function getDataById() {
    const id = get_id.current.value;

    if (id) {
      try {
        const res = await fetch(`${baseURL}/student/${id}`);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          data: data,
        };

        setGetResult(fortmatResponse(result));
      } catch (err) {
        setGetResult(err.message);
      }
    }
  }

  async function postData() {
    const postData = {
      name: post_name.current.value,
      course: post_course.current.value,
    };

    try {
      const res = await fetch(`${baseURL}/student`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        data: data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }

  async function putData() {
    const id = put_id.current.value;

    if (id) {
      const putData = {
        name: put_name.current.value,
        course: put_course.current.value,
      };
      console.log(putData);

      try {
        const res = await fetch(`${baseURL}/student/${id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(putData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          data: data,
        };
        setPutResult(fortmatResponse(result));
      } catch (err) {
        setPutResult(err.message);
      }
    }
  }

  async function deleteDataById() {
    const id = delete_id.current.value;

    if (id) {
      try {
        const res = await fetch(`${baseURL}/student/${id}`, {
          method: "delete",
        });

        const data = await res.json();

        const result = {
          data: data,
        };

        setDeleteResult(fortmatResponse(result));
      } catch (err) {
        setDeleteResult(err.message);
      }
    }
  }

  const clearGetOutput = () => {
    setGetResult(null);
  };

  const clearPostOutput = () => {
    setPostResult(null);
  };

  const clearPutOutput = () => {
    setPutResult(null);
  };

  const clearDeleteOutput = () => {
    setDeleteResult(null);
  };

  return (
    <div id="app" className="container my-3">
      <h2>UXDATA Software Training Institute</h2>

      <div className="card mt-3">
        <div className="card-header">Get Student / Students Details </div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>
              Get All
            </button>

            <input
              type="text"
              ref={get_id}
              className="form-control ml-2"
              placeholder="Id"
            />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>
                Get by Id
              </button>
            </div>

            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={clearGetOutput}
            >
              Clear
            </button>
          </div>

          {getResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{getResult}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">Insert New Student details</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={post_name}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={post_course}
              placeholder="Course"
            />
          </div>
          <button className="btn btn-sm btn-primary" onClick={postData}>
            Post Data
          </button>
          <button
            className="btn btn-sm btn-warning ml-2"
            onClick={clearPostOutput}
          >
            Clear
          </button>

          {postResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{postResult}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">Update Student Details</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_id}
              placeholder="Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_name}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_course}
              placeholder="Description"
            />
          </div>

          <button className="btn btn-sm btn-primary" onClick={putData}>
            Update Data
          </button>
          <button
            className="btn btn-sm btn-warning ml-2"
            onClick={clearPutOutput}
          >
            Clear
          </button>

          {putResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{putResult}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">DELETE Student Details</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <input
              type="text"
              ref={delete_id}
              className="form-control ml-2"
              placeholder="Id"
            />
            <div className="input-group-append">
              <button
                className="btn btn-sm btn-danger"
                onClick={deleteDataById}
              >
                Delete by Id
              </button>
            </div>

            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={clearDeleteOutput}
            >
              Clear
            </button>
          </div>

          {deleteResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{deleteResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
