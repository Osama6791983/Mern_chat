const GenderCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="form-control flex gap-4">
        <label className="label cursor-pointer">
          <span className="label-text text-white">Male</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500 ml-4 bg-gray-500"
            checked
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
            
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
