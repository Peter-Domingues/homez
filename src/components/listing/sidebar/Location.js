"use client";
import Select from "react-select";

const Location = ({ filterFunctions }) => {
  const locationOptions = [
    { value: "", label: "All Cities" },
    { value: "Bal Harbour", label: "Bal Harbour" },
    { value: "Bay Harbor Islands", label: "Bay Harbor Islands" },
    { value: "Boca Raton", label: "Boca Raton" },
    { value: "Coconut Grove", label: "Coconut Grove" },
    { value: "Coral Gables", label: "Coral Gables" },
    { value: "Davie", label: "Davie" },
    { value: "Deerfield Beach", label: "Deerfield Beach" },
    { value: "Delray Beach", label: "Delray Beach" },
    { value: "Downtown", label: "Downtown Miami" },
    { value: "Fisher Island", label: "Fisher Island" },
    { value: "Fort Lauderdale", label: "Fort Lauderdale" },
    { value: "Hollywood", label: "Hollywood" },
    { value: "Jupiter", label: "Jupiter" },
    { value: "Key Biscayne", label: "Key Biscayne" },
    { value: "Miami Beach", label: "Miami Beach" },
    { value: "Miami Shores", label: "Miami Shores" },
    { value: "North Miami", label: "North Miami" },
    { value: "North Palm Beach", label: "North Palm Beach" },
    { value: "Palm Beach", label: "Palm Beach" },
    { value: "Palmetto Bay", label: "Palmetto Bay" },
    { value: "Pembroke Pines", label: "Pembroke Pines" },
    { value: "Pinecrest", label: "Pinecrest" },
    { value: "South Beach", label: "South Beach" },
    { value: "South Miami", label: "South Miami" },
    { value: "Sunny Isles Beach", label: "Sunny Isles Beach" },
    { value: "Sunset Beach", label: "Sunset Beach" },
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
