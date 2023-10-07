import { Link } from 'react-router-dom';

function NewSearchButton() {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <div className="my-3 h-10 w-28 rounded bg-stone-500 px-2 py-2 text-center text-white">
          New Search
        </div>
      </Link>
    </div>
  );
}

export default NewSearchButton;
