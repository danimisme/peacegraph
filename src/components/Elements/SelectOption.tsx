export default function SelectOption({
  label,
  name,
  options,
}: {
  label: String;
  name: String;
  options: String[];
}) {
  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>{label}</option>
        {options.map((option, i) => (
          <option key={i} value={option.toLowerCase().replace(/ /g, "-")}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
