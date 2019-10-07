import { useRouter } from "next/router";
import Layout from "../components/MyLayout";

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h3>{router.query.title}</h3>
      <p>This is the current blog post title.</p>
    </Layout>
  );
};

export default Page;
