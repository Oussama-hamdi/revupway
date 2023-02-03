import React from "react";

function Service(props) {
  return (
    <div className="service">
      {props.icon}
      <h2 className="service-title">{props.title}</h2>
      <p className="service-info">
        Nisullam congue rhoncus the risus dapibus habitant mauris eget ante
        pharetra.
      </p>
    </div>
  );
}

export default Service;
