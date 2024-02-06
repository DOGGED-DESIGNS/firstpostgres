const timez = (date) => {
  const currentDate = new Date().getTime() / 1000;

  const regDate = new Date(date).getTime() / 1000;

  const time = Math.floor(currentDate - regDate);

  if (time) {
    if (time <= 60) {
      return "just now";
    }
    if (time >= 60 && time < 3600) {
      return Math.floor(time / 60) === 1
        ? "a minute ago"
        : Math.floor(time / 60) + "minutes ago";
    }
    if (time >= 3600 && time < 86400) {
      return Math.floor(time / 3600) == 1
        ? "1 hour ago"
        : `${Math.floor(time / 3600)} hours ago`;
    }
    if (time >= 86400 && time < 604800) {
      return Math.floor(time / 86400) == 1
        ? "a day ago"
        : `${Math.floor(time / 86400)} days ago`;
    }
    if (time >= 604800 && time < 2419200) {
      return Math.floor(time / 604800) == 1
        ? "a week ago"
        : `${Math.floor(time / 604800)} weeks ago`;
    }
    if (time >= 2419200 && time < 29030400) {
      return Math.floor(time / 2419200) == 1
        ? "a month ago"
        : `${Math.floor(time / 2419200)} months ago`;
    }
    if (time >= 29030400 && time < 2903040000) {
      return Math.floor(time / 29030400) == 1
        ? "a year ago"
        : `${Math.floor(time / 29030400)} years ago`;
    }
  }

  //   switch (time) {
  //     case time <= 60:
  //       console.log("it was reached");
  //       return "just now";
  //     case time >= 60 && time < 3600:
  //       console.log("it was reached");
  //       return Math.floor(time / 60) === 1
  //         ? "a minute ago"
  //         : Math.floor(time / 60) + "minutes ago";
  //     case time >= 3600 && time < 86400:
  //       console.log("it was reached");
  //       return Math.floor(time / 3600) == 1
  //         ? "1 hour ago"
  //         : `${Math.floor(time / 3600)} hours ago`;

  //     case time >= 86400 && time < 604800:
  //       console.log("it was reached");
  //       return Math.floor(time / 86400) == 1
  //         ? "a day ago"
  //         : `${Math.floor(time / 86400)} days ago`;
  //     case time >= 604800 && time < 2419200:
  //       return Math.floor(time / 604800) == 1
  //         ? "a week ago"
  //         : `${Math.floor(time / 604800)} weeks ago`;
  //     case time >= 2419200 && time < 29030400:
  //       return Math.floor(time / 2419200) == 1
  //         ? "a month ago"
  //         : `${Math.floor(time / 2419200)} months ago`;
  //     case time >= 29030400 && time < 2903040000:
  //       return Math.floor(time / 29030400) == 1
  //         ? "a year ago"
  //         : `${Math.floor(time / 29030400)} years ago`;
  //   }
};

module.exports = {
  timez,
};
