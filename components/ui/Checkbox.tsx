export default function Checkbox({
    isChecked,
    handleChange,
    Customlable,
  }: {
    isChecked: boolean;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    Customlable: string;
  }) {
    return (
      <div>
        <input
          type="checkbox"
          id="myCheckbox"
          checked={isChecked} // ربط خاصية checked بالبروب
          onChange={handleChange} // ربط حدث التغيير بالدالة
          className="w-4 h-4 ml-2 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded
         focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800
        focus:ring-2 dark:bg-gray-700 dark:border-gray-600" // كلاسات Flowbite
        />
        <label htmlFor="myCheckbox">{Customlable}</label>
      </div>
    );
  }