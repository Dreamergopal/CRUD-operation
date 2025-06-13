import React, { useEffect, useState } from "react";
import { editPost, postData } from "../services/PostApi";

function Form({ data, setData, editData, setEditData }) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addPostData = async () => {
    const newID = Math.max(0, ...data.map((elem) => elem.id || 0)) + 1;

    try {
      const response = await postData(addData);
      console.log(response);
      if (response.status === 201) {
        setData([
          ...data,
          {
            ...response.data,
            id: newID,
          },
        ]);
        setAddData({ title: "", body: "" });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const isEmpty = Object.keys(editData).length === 0;

  useEffect(() => {
    editData &&
      setAddData({
        title: editData.title || "",
        body: editData.body || "",
      });
  }, [editData]);

  const editPostData = async () => {
    try {
      const response = await editPost(editData.id, addData);
      setData((prev) => {
        return prev.map((elem) => {
          return elem.id === response.data.id ? response.data : elem;
        });
      });
      setAddData({ title: "", body: "" });
      setEditData("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      editPostData();
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-gradient-to-br from-indigo-900 to-purple-900 p-4 rounded-2xl shadow-lg w-full max-w-5xl mx-auto space-y-4"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="title" className="text-white mb-1 font-medium">
            Title
          </label>
          <input
            className="p-2 rounded-md bg-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            type="text"
            placeholder="Add title"
            autoComplete="off"
            name="title"
            id="title"
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="body" className="text-white mb-1 font-medium">
            Description
          </label>
          <input
            className="p-2 rounded-md bg-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            type="text"
            placeholder="Add text"
            autoComplete="off"
            name="body"
            id="body"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            value={isEmpty ? "Add" : "Edit"}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-semibold hover:brightness-110 transition whitespace-nowrap"
          >
            {isEmpty ? "Add" : "Edit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;



