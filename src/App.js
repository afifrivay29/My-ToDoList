import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Menyapu",
      desc: "Sudah",
    },
    {
      id: 2,
      name: "Mencuci Piring",
      desc: "Belum",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    name: "",
    desc: "",
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Data Telah Ditambahkan");
    let data = [...contacts];

    if (formData.name === "") {
      return false;
    }

    if (formData.desc === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name;
          contact.desc = formData.desc;
        }
      });
    } else {
      data.push({ id: uid(), name: formData.name, desc: formData.desc });
    }

    // menambahkan contact
    setIsUpdate({ id: null, status: false });
    setContacts(data);
    setFormData({ name: "", desc: "" });
  }

  function handleEdit(id) {
    let data = [...contacts];
    let foundData = data.find((contact) => contact.id === id);
    setFormData({ name: foundData.name, desc: foundData.desc });
    setIsUpdate({ id: id, status: true });
  }

  function handleDelete(id) {
    let data = [...contacts];
    let filteredData = data.filter((contact) => contact.id !== id);
    setContacts(filteredData);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="px-3 py-3">My Job Records List</h1>

        <form onSubmit={handleSubmit} className="px-3 py-4">
          <div className="form-group">
            <label htmlFor="">Name Job</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={formData.name}
              name="name"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">Description</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={formData.desc}
              name="desc"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save
            </button>
          </div>
        </form>
      </div>

      <List
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        data={contacts}
      />
      <Footer />
    </div>
  );
}

export default App;
