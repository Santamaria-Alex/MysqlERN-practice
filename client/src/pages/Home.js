import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");

    setData(response.data);

    console.log(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Contact successfully deleted.");

      //after 5 milisec, updated data will appear
      setTimeout(() => {
        loadData();
      }, 500);
    }
  };

  return (
    <div className="home-container">
      <Link to="/addContact">
        <button className="btn btn-contact">Add Contact</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th className="table">No.</th>
            <th className="table">Name</th>
            <th className="table">Email</th>
            <th className="table">Contact</th>
            <th className="table">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>

                  <button
                    onClick={() => {
                      deleteContact(item.id);
                    }}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>

                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
