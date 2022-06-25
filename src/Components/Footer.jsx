import React from "react";
import ShareIcon from "@mui/icons-material/Share";
function Footer() {
  const currDate = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>Copyright &#169; {currDate}</p>
      </footer>
    </>
  );
}
export default Footer;
