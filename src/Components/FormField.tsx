interface Props {
  value: string;
  onChange: (newValue:string) => void
  labelName: string;
  type: string;
  name: string;
  placeholder: string;

  isSurpriseMe: boolean;
  handleSurpriseMe?: () => void;

}

const FormField = ({
  value,
  onChange,
  labelName,
  type,
  name,
  placeholder,
  isSurpriseMe,
  handleSurpriseMe,
}: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={`${name}_input`}>{labelName}</label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >Surprise me</button>
        )}
        <input
          id={`${name}_input`}
          value={value}
          onChange={(e)=>{onChange(e.target.value)}}
          type={type}
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 text-gray-900
            text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]
            outline-none block w-full p-3"
        />
      </div>
    </div>
  );
};

export default FormField;
