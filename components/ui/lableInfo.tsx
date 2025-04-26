//
interface TextInfoProps {
  lableName: string;
  textValue: string;
  className?: string;
}

export default function TextInfo({ lableName, textValue, className = "" }: TextInfoProps) {
  return (
    <div className={`flex flex-row mt-1 ${className}`}>
      <label className="ml-2 text-lg text-text text-left">{lableName} :</label>
      <label className="text-text">
        {textValue}
      </label>
    </div>
  );
}
