let formatUrlName = (name) => {
  let formattedName = name;
  if (name.includes("mime")) {
    formattedName = formattedName.replaceAll("-", ".");
  }

  if (name.includes("nidoran")) {
    formattedName = formattedName.replaceAll("-", "_");
  }
  return formattedName;
};

let formatUrlType = () => {
  let is_checked = document.querySelector(".shiny-switch").value;
  let formattedType = is_checked == "off" ? "shiny" : "normal";
  return formattedType;
};

export { formatUrlName, formatUrlType };
