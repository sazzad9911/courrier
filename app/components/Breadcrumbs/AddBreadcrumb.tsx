"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
interface BreadcrumbProps {
  pageName: string;
  link:  string;
}
const AddBreadcrumb = ({ pageName, link }: BreadcrumbProps) => {
  const router=useRouter()
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-title-md2 font-semibold text-boxdark dark:text-white">
          {pageName}
        </h2>
        <button onClick={()=>router.push(`${link}`)} className="flex gap-2 font-bold items-center hover:text-primary ">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 27.5C21.9035 27.5 27.5 21.9035 27.5 15C27.5 8.09644 21.9035 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9035 8.09644 27.5 15 27.5ZM15.9375 11.25C15.9375 10.7322 15.5178 10.3125 15 10.3125C14.4822 10.3125 14.0625 10.7322 14.0625 11.25V14.0625H11.25C10.7322 14.0625 10.3125 14.4822 10.3125 15C10.3125 15.5178 10.7322 15.9375 11.25 15.9375H14.0625V18.75C14.0625 19.2678 14.4822 19.6875 15 19.6875C15.5178 19.6875 15.9375 19.2678 15.9375 18.75V15.9375H18.75C19.2678 15.9375 19.6875 15.5178 19.6875 15C19.6875 14.4822 19.2678 14.0625 18.75 14.0625H15.9375V11.25Z"
              className="fill-current"
            />
          </svg>
          Add New
        </button>
      </div>
      <nav>
        <ol className="flex items-center gap-2 text-boxdark dark:text-white">
          <li>
            <Link className="font-medium" href="/moderator">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-yellow-400">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default AddBreadcrumb;
