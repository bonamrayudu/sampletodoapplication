import React, { useEffect ,useState} from "react";

function About() {
    const [data, setData] = useState([]);

    useEffect(()=>{
    const  fetchData = async ()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json=await  response.json();
            console.log(json);
            setData(json);
           
            
        }
        catch(error){
            console.error("Error fetching data:", error);
            
        }
    }
    fetchData(); 
      
    },[])
  return (
    <div>
        {
            data.length>0 ?(
                data.map((user)=>(
                    <h1 key={user.id}>{user.name}</h1>
                ))

            ) :(
                <p>loading....</p>
            )
        }
      <h1>About Us</h1>
      <p>Learn more about our app and what it offers.</p>
    </div>
  );
}

export default About;
