import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <div>BlogDetail {productId}</div>
    </>
  );
};

export default BlogDetail;
