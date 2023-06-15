import Link from "next/link";
import { useRouter } from "next/router";

const HeaderDropDown = ({ row }) => {
  const router = useRouter();

  return (
    <div className="relative group z-50">
      <Link className="flex items-center gap-1" href={row.path}>
        <p>{row.label}</p>
        <DownIcon />
      </Link>
      <div className="absolute py-3 pt-4 flex-col  hidden group-hover:flex hover:flex z-50">
        <div className="bg-dark/10   flex flex-col rounded overflow-hidden text-white border backdrop-blur-xl border-white/5">
          {row.content.map((row, index) => (
            <Link
              href={row.path}
              key={index}
              className={`px-6 py-3 w-60 z-50  hover-transition hover:text-white ${
                row.path == router.asPath || row.path == router.pathname
                  ? "bg-white/10"
                  : "hover:bg-white/10"
              }`}
            >
              {row.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown;

const DownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
