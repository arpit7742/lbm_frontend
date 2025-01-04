import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Loader from "../components/Loader";

const SingleBookPage = () => {
  const { user, setUser } = useOutletContext();
  const [bookLoading, setBookLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const contentRef = useRef(null);
  let { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const content = contentRef.current?.value;
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/books/${id}/comment`,
        { content: content },
        { withCredentials: true }
      );
      toast.success("Comment Added");
      setBook(response.data.data);
      contentRef.current.value = "";
    } catch (error) {
      console.error(error);
      toast.error("Error adding comment");
    }
  };

  const handleWishlist = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL}/books/toggleWishlist/${id}`,
        { withCredentials: true }
      );
      toast.success("Wishlist updated");
      setUser(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Error updating wishlist");
    }
  };

  const handleDelete = async () => {
    await axios
      .delete(`${import.meta.env.VITE_URL}/books/delete/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("Book deleted successfully");
        navigate("../books");
      });
  };

  const handleUpdate = async () => {
    navigate(`../books/update/${id}`);
  };

  useEffect(() => {
    const getBook = async () => {
      setBookLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URL}/books/${id}`,
          { withCredentials: true }
        );
        setBook(response.data.data);
        setBookLoading(false);
      } catch (error) {
        toast.error("Error fetching book");
        setBookLoading(false);
        console.error(error);
      }
    };
    getBook();
  }, [id]);

  return (
    <>
      {bookLoading ? <Loader /> : ""}
      <div className={`bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-8 ${bookLoading ? "hidden" : ""}`}>
        {user.isAdmin && (
          <div className="px-8 text-sm pb-4 flex items-center gap-4 justify-end">
            <span className="text-white">ADMIN CONTROLS:</span>
            <button
              onClick={handleUpdate}
              className="border-2 p-2 rounded-md text-emerald-500 border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              UPDATE
            </button>
            <button
              onClick={handleDelete}
              className="border-2 p-2 rounded-md text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              DELETE
            </button>
          </div>
        )}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-xl">
          <div className="flex bg-white flex-col md:flex-row shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center items-center w-full md:w-2/5 bg-gradient-to-b from-teal-500 to-teal-400">
              <img
                className="object-cover rounded-lg max-w-full h-auto"
                src={book?.coverImage}
                alt={book?.title}
              />
            </div>
            <div className="md:w-3/5 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{book?.title}</h2>
                <div onClick={handleWishlist} className="cursor-pointer">
                  {user?.wishlist?.includes(id) ? (
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                        fill="#ff5733"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                        fill="#d6d6d6"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">by {book.author}</p>
              <div className="mb-6">
                <span className="font-semibold text-gray-800">Description:</span>
                <p className="text-gray-700 text-sm mt-2">{book?.description}</p>
              </div>
              <div className="text-lg font-medium">
                <span className="font-semibold text-gray-800">Genre:</span>
                <span className="mx-2 px-3 py-1 bg-purple-300 text-purple-700 rounded-md text-sm">
                  {book?.genre}
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white px-6 py-4 rounded-lg shadow-md">
            <form
              onSubmit={handleAddComment}
              className="flex gap-4 mb-4"
            >
              <div className="w-full">
                <textarea
                  ref={contentRef}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-all duration-300"
              >
                Post
              </button>
            </form>

            {book?.comments?.map((comment, idx) => (
              <article key={idx} className="p-4 bg-gray-50 rounded-lg shadow-sm mb-4">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="text-gray-800 font-semibold">@{comment.user.username}</p>
                    <p className="text-sm text-gray-500 ml-2">
                      {new Date(comment.createdAt).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </footer>
                <p className="text-gray-600">{comment.content}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleBookPage;
