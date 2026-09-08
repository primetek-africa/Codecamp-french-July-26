export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();



  return (
    <ol>
      {posts.slice(0, 10).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
}
