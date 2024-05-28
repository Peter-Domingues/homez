"use client";
import Select from "react-select";

const Location = ({ filterFunctions }) => {
  const locationOptions = [
    { value: "", label: "All Cities" },
    { value: "Ball Harbour", label: "Ball Harbour" },
    { value: "Bay Harbour", label: "Bay Harbour" },
    { value: "Boca Raton", label: "Boca Raton" },
    { value: "Brickell", label: "Brickell" },
    { value: "Brickell Key", label: "Brickell Key" },
    { value: "Coconut Groove", label: "Coconut Groove" },
    { value: "Coral Gables", label: "Coral Gables" },
    { value: "Davie", label: "Davie" },
    { value: "Deerfield Beach", label: "Deerfield Beach" },
    { value: "Delray Beach", label: "Delray Beach" },
    { value: "Downtown Miami", label: "Downtown Miami" },
    { value: "Fisher Island", label: "Fisher Island" },
    { value: "Fort Lauderdale", label: "Fort Lauderdale" },
    { value: "Holywood", label: "Holywood" },
    { value: "Jupiter", label: "Jupiter" },
    { value: "Key Biscayne", label: "Key Biscayne" },
    { value: "Miami Beach", label: "Miami Beach" },
    { value: "Miami Shores", label: "Miami Shores" },
    { value: "North Miami", label: "North Miami" },
    { value: "North Palm Beach", label: "North Palm Beach" },
    { value: "Palm Beach", label: "Palm Beach" },
    { value: "Palmetto", label: "Palmetto" },
    { value: "Pembroke Pines", label: "Pembroke Pines" },
    { value: "Pinecrest", label: "Pinecrest" },
    { value: "South Beach", label: "South Beach" },
    { value: "South Miami", label: "South Miami" },
    { value: "Sunny Isle", label: "Sunny Isle" },
    { value: "Sunset", label: "Sunset" },
    { value: "The Roads", label: "The Roads" },
    { value: "Weston", label: "Weston" },
    { value: "Wynwood", label: "Wynwood" },
  ];

  const customStyles = {
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

  return (
    <Select
      name="colors"
      styles={customStyles}
      options={locationOptions}
      className="select-custom filterSelect"
      classNamePrefix="select"
      onChange={(e) => filterFunctions?.handleCity(e.value)}
      required
    />
  );
};

export default Location;
