export default async function BlogPost({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: 'force-cache' }//SSG
  );

  const post = await res.json();

  return <h1>{post.title}</h1>;
}
