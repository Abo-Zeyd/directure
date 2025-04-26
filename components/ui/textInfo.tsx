// 
interface TextInfoProps {
  lableName: string;
  placeholdertext: string;
  onTextChange: (value: string) => void;
  textValue: string; // استقبال قيمة من المصفوفة
}

export default function TextInfo({ lableName, placeholdertext, onTextChange, textValue }: TextInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row mt-1 w-full ">
      <label className="mr-2 text-lg text-right w-32 flex-shrink-0">{lableName} :</label>
      <div className="flex-grow w-fit md:justify-self-center md:items-center"> 
      <input
        type="text"
        className="bg-accent text-text  border-solid border-2 border-primary rounded-md "
        placeholder={placeholdertext}
        value={textValue}
        onChange={handleChange}
      />
      </div>
    </div>
  );
}
