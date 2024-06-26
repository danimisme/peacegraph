import { FaSearch } from "react-icons/fa";

export default function SearchInput({
  label,
  name,
  placeholder,
  onChange,
  onSubmit,
}: {
  label: string;
  name: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch />
          </div>
          <input
            type="text"
            id={name}
            name={name}
            className="bg-transparent border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}
