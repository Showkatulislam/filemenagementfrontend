import { FaFolder, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Folder = ({user,deleteFolder}) => {
  return (
    <Link to={`/deshboard/all/${user?.id}`}>
      <div  tabIndex={0} className="flex   items-center space-x-8 px-12 py-1 dark:bg-indigo-400 dark:text-white max-w-xs rounded-lg my-5">
        <p>
          <FaFolder />
        </p>
        <p>{user.userName}</p>
        <p role="button" onClick={()=>deleteFolder(user.email)}>
          <FaTrashAlt />
        </p>
      </div>
    </Link>
  );
};

export default Folder;
