import Image from "next/image";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/hello');
  // {message:'bonjour depuis API de next '}
  
  const data = await res.json();
  //data = {message:'bonjour depuis API de next '}

  return (
    <>
     <p>consulter depuis: {data.message}</p>
     <Image
     src="/images/Primetek_Blue_Slogans.jpg"
     alt="photo test"
     width={400}
     height={400}
    //  quality={75}
     priority
     //3mb
     //300kb et 200kb
     />

     <h1>image provenant d'un autre domaine</h1>
    <Image
     src="https://primetek.academy/images/programs/codecamp-poster.png"
     alt="photo test"
     width={400}
     height={400}
    //  quality={75}
     
     />
 

 <div style={{position:'relative',width:'100%', height:'300px'}}>
       <Image
     src="/images/Primetek_Blue_Slogans.jpg"
     alt="photo test"
     fill
     style={{objectFit:'cover'}}
     />
 </div>
    </>
  );
}


//fill
//4mb->300kb, 200kb

//priority
//CLS: cumulative layout shift
//LCP: Largest content paint 