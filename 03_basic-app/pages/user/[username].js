import { useRouter } from "next/router";

const userName = () => {
  const { query } = useRouter();
  return (
    <>
      <h1> This is {query.username} page </h1>
    </>
  );
};

export default userName;
