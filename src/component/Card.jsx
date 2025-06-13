import React from "react";

function Card({ data, handleDelete, setEditData }) {
  const { id, title, body } = data;

  const handleEditData = (text) => {
    setEditData(text);
  };

  return (
    <li
      className="bg-gradient-to-br from-[#1b113a] to-[#0e0e2c] text-white rounded-2xl p-6 shadow-lg border border-indigo-900 hover:scale-[1.02] transition-transform"
      // key={id}
    >
      <p className="text-sm text-purple-400 mb-1 font-mono tracking-wide">
        #{id}
      </p>

      <p className="text-2xl font-semibold mb-3">{title}</p>
      <p className="text-gray-300 mb-5 leading-relaxed">{body}</p>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:brightness-110 transition"
          onClick={() => handleEditData(data)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-md hover:brightness-110 transition"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Card;
