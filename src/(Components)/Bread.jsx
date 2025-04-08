/* eslint-disable react/prop-types */
import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";

export function Bread({ item }) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example ">
      {item.map((item, index) => (
        <Breadcrumb.Item  key={index}>
          <Link className="text-color3" to={item.link} key={index}>
            {item.title}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
