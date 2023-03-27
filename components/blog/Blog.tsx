type blogProps = {
  title: String;
  createdAt: any;
};

const Blog = ({ title, createdAt }: blogProps) => {
  return (
    <>
      <div>
        <div className="container">
          <h1>{title}</h1>
          <p>{createdAt.toString()}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
