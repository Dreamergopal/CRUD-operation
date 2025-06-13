import React, { useEffect, useState } from "react";
import { apiData, deletePost } from "../services/PostApi";
import Card from "./Card";
import Form from "./Form";

function Post() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const getPostData = async () => {
    const response = await apiData();
    setData(response.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);

      if (res.status === 200) {
        const updatedPost = data.filter((post) => post.id !== id);
        setData(updatedPost);

        // setData((prev) => prev.filter((currPost) => currPost.id !== id)); --> it was a smart process
      } else {
        console.log(`Failed to delete the data`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="max-w-4xl w-full mx-auto px-4 py-10">
        <Form
          data={data}
          setData={setData}
          editData={editData}
          setEditData={setEditData}
        />
      </section>

      <section className="max-w-7xl w-full mx-auto px-4 py-10">
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((curr) => (
            <Card
              key={curr.id}
              data={curr}
              handleDelete={() => handleDelete(curr.id)}
              editData={editData}
              setEditData={setEditData}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Post;
