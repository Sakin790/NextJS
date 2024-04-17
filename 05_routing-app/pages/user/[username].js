import React from "react";
import { useRouter } from "next/router";

const dynamic = () => {
  const route = useRouter();
  console.log(route);
  return <div>Username is {route.query.user}</div>;
};

export default dynamic;
