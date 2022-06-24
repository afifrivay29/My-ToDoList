import React from "react";
import "../index.css";

export default function List({ data, handleEdit, handleDelete }) {
  return (
    <div className="list-group">
      {data.map((contact) => {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{contact.name}</h5>
              <div>
                <button
                  onClick={() => handleEdit(contact.id)}
                  className="button-list btn btn-sm btn-success"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="button-list btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="mb-1">{contact.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
