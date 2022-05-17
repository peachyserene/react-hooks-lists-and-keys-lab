import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let navItems = links.map((item) => {
    console.log(item);
    return (
      <a key={item} href={`#${item}`}>
        {item}
      </a>
    );
  });

  return <nav>{navItems}</nav>;
}

export default NavBar;
