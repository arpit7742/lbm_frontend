import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/dashboard/books/${book._id}`);
      }}
      className="cursor-pointer lg:max-w-[240px] bg-gradient-to-r from-blue-50 to-blue-100 border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="overflow-hidden rounded-t-xl">
        <img
          className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
          src={book.coverImage}
          alt={book.title}
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-semibold text-blue-800 truncate">
          {book.title}
        </h5>
        <p className="text-sm font-medium text-gray-600 truncate">
          {book.author}
        </p>
      </div>
    </div>
  );
};

export default Book;
