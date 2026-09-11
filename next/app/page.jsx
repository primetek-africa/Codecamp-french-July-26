export default async function Home() {
  const res = await fetch('http://localhost:3000/api/hello');
  
  const data = await res.json();

  return (
    <>
     <p>consulter depuis: {data.message}</p>
    </>
  );
}
