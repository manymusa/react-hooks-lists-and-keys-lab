import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linka = links.map(link =>{
    return <a key = {link} href={`#${link}`}>{link}</a>
  })

  return <nav>{linka}</nav>;
}

export default NavBar;
