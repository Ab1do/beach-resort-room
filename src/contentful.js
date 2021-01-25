import { createClient } from "contentful";

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  // space: "niabnclrne1p",
  // accessToken: "JLt3gJVYDC3TnLIdgXtWyvTWZwfT4PhdnkhNMbudjlg",
});
