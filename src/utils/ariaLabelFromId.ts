const ariaLabelFromId = (id: string) => (id.charAt(0).toUpperCase() + id.slice(1)).split("-").join(" ");

export default ariaLabelFromId;