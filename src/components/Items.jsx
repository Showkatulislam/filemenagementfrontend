import { Link } from "react-router-dom";

const Items = () => {
  return (
    <>
      <li className="text-base font-semibold">
      <Link>About System</Link>
      </li>
      <li className="text-base font-semibold">
        <Link to='/file'>File</Link>
      </li>
    </>
  );
};

export default Items;
