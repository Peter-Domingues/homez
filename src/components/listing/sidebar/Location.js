"use client";
import Select from "react-select";

const Location = ({ filterFunctions }) => {
  const locationOptions = [
    { value: "All Cities", label: "All Cities" },
    { value: "Altamonte Springs", label: "Altamonte Springs" },
    { value: "Apopka", label: "Apopka" },
    { value: "Aventura", label: "Aventura" },
    { value: "Boca Raton", label: "Boca Raton" },
    { value: "Bonita Springs", label: "Bonita Springs" },
    { value: "Boynton Beach", label: "Boynton Beach" },
    { value: "Bradenton", label: "Bradenton" },
    { value: "Cape Coral", label: "Cape Coral" },
    { value: "Clearwater", label: "Clearwater" },
    { value: "Coral Springs", label: "Coral Springs" },
    { value: "Davie", label: "Davie" },
    { value: "Daytona Beach", label: "Daytona Beach" },
    { value: "Deerfield Beach", label: "Deerfield Beach" },
    { value: "Delray Beach", label: "Delray Beach" },
    { value: "Doral", label: "Doral" },
    { value: "Fort Lauderdale", label: "Fort Lauderdale" },
    { value: "Fort Myers", label: "Fort Myers" },
    { value: "Gainesville", label: "Gainesville" },
    { value: "Hialeah", label: "Hialeah" },
    { value: "Hollywood", label: "Hollywood" },
    { value: "Homestead", label: "Homestead" },
    { value: "Jacksonville", label: "Jacksonville" },
    { value: "Kissimmee", label: "Kissimmee" },
    { value: "Lakeland", label: "Lakeland" },
    { value: "Leesburg", label: "Leesburg" },
    { value: "Margate", label: "Margate" },
    { value: "Melbourne", label: "Melbourne" },
    { value: "Miami", label: "Miami" },
    { value: "Miramar", label: "Miramar" },
    { value: "Naples", label: "Naples" },
    { value: "New Smyrna Beach", label: "New Smyrna Beach" },
    { value: "Ocala", label: "Ocala" },
    { value: "Orlando", label: "Orlando" },
    { value: "Palm Bay", label: "Palm Bay" },
    { value: "Palm Beach Gardens", label: "Palm Beach Gardens" },
    { value: "Panama City", label: "Panama City" },
    { value: "Pensacola", label: "Pensacola" },
    { value: "Plantation", label: "Plantation" },
    { value: "Pompano Beach", label: "Pompano Beach" },
    { value: "Port St. Lucie", label: "Port St. Lucie" },
    { value: "Sarasota", label: "Sarasota" },
    { value: "Sanford", label: "Sanford" },
    { value: "St. Cloud", label: "St. Cloud" },
    { value: "St. Petersburg", label: "St. Petersburg" },
    { value: "Tallahassee", label: "Tallahassee" },
    { value: "Tampa", label: "Tampa" },
    { value: "Wellington", label: "Wellington" },
    { value: "West Palm Beach", label: "West Palm Beach" },
    { value: "Winter Haven", label: "Winter Haven" },
    { value: "Winter Park", label: "Winter Park" },
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
  console.log(filterFunctions.city);
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
