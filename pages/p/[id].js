import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";

const styleImg = {
  marginRight: 15,
  maxWidth: "50%"
};
const styleP = {
  marginRight: 15,
  maxWidth: "50%",
  display: "inline-block",
  marginLeft: 100
};

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <div>
      <img src={props.show.image.medium} style={styleImg} />
      <p style={styleP}>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
    </div>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
