//1

const capitalizeFirstLetter = string => {
    return string
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const string = "capiltilize the first letter of each word";
  const captilizedString = capitalizeFirstLetter(string);
  console.log(captilizedString);

  //2

  function truncate(str, max) {
    if (str.length > max) {
        return str.substring(0, max) + "...";
    } else {
        return str;
    }
  }

  console.log(truncate('This text will be truncated if it is too long', 25));

  //3


