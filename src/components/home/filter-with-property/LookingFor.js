"use client";
import { changePropertyTypes } from "@/store/reducers/filterReducer";
import { useDispatch } from "react-redux";
import Select from "react-select";

const LookingFor = ({ addOrRemoveFilters }) => {
  const dispatch = useDispatch();
  const inqueryType = [
    { value: "Condominium", label: "Condo" },
    { value: "Townhouse", label: "Townhouse" },
    { value: "SingleFamilyResidence", label: "Single Family" },
    { value: "Commercial", label: "Commercial" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
    }),
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#1f6769"
          : isHovered
          ? "#1f676912"
          : isFocused
          ? "#1f676912"
          : undefined,
      };
    },
  };

  const handlePropertyTypes = (elm) => {
    dispatch(changePropertyTypes(elm));
    addOrRemoveFilters("PropertySubType", elm);
  };

  return (
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        onChange={(e) => handlePropertyTypes([e.value])}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default LookingFor;
