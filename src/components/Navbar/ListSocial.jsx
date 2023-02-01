import React from "react";

function ListSocial(props) {
  return (
    <li>
      <a style={props.style} href="/" target="_blank" rel="noreferrer">
        {props.icon}
      </a>
    </li>
  );
}

export default ListSocial;
