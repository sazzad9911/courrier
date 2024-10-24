import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-white dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2 text-white">
          <li>
            <Link className="font-medium" href="/dashboard">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-yellow-400">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
