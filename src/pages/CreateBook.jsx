import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);
  const [coverImage, setCoverImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (coverImage) {
      formDataToSend.append("coverImage", coverImage);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/books`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      toast.success("Book created successfully!");
      setFormData({
        title: "",
        author: "",
        description: "",
        genre: "",
      });
      setCoverImage(null);
      setLoading(false);
      navigate(`../books/${response.data.data._id}`);
    } catch (error) {
      setLoading(false);

      // Handle error response
      if (error.response && error.response.status === 409) {
        toast.error("Duplicate Book not allowed");
      } else {
        toast.error("Failed to create book. Try again.");
      }
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Create New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="file"
          name="coverImage"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Creating..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default CreateBook;
