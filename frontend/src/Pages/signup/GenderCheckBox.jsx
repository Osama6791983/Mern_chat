const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex gap-6">
      <div className="form-control flex gap-4">
        <label className="label cursor-pointer">
          <span className="label-text text-white">Male</span>
          <input
            type="radio"
            name="radio-10"
            value={"male"}
            onClick={(e) => {
              onCheckBoxChange(e);
            }}
            className="radio checked:bg-red-500 ml-4 bg-gray-500"
            checked ={selectedGender==="male"}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ">
          <span className="label-text text-white">Female</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 ml-4 bg-gray-500"
            value={"female"}
            onClick={(e) => {
              onCheckBoxChange(e);
            }}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
