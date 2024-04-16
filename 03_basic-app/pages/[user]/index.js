import { useRouter } from "next/router";

const indexPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h1>Index {router.query.user} page</h1>
      <button>Open Setting Page</button>
    </>
  );
};
export default indexPage;
