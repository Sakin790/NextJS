import { useRouter } from "next/router";

const setting = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Setting For {router.query.username}</h1>
    </div>
  );
};

export default setting;
