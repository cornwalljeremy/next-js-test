export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((puppy) => {
    return {
      params: { id: puppy.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { puppy: data },
  };
};

const Details = ({ puppy }) => {
  return (
    <div>
      <h1>{puppy.name}</h1>
      <p>{puppy.email}</p>
      <p>{puppy.website}</p>
      <p>{puppy.address.city }</p>
    </div>
  );
};

export default Details;
