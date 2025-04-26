
export function RadioButton({
    value,
    handleChange,
    label,
    name,
    checked,
  }: {
    value: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    label: string;
    name: string;
    checked: boolean;
  }) {
    return (
      <div className="flex flex-row  ">
        <label htmlFor={value} className="flex items-center ml-2 mt-3 ">
          <input
            type="radio"
            id={value}
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            className="w-4 h-4 ml-2 mb-2  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <span className="ml-2 -mt-1 text-text">{label}</span>
        </label>
      </div>
    );
  }
  