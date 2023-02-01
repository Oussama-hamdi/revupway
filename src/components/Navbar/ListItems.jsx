import React from "react";

function ListItems(props) {
  return (
    <li>
      <a href={`#${props.name}`}>{props.name}</a>
    </li>
  );
}

export default ListItems;
