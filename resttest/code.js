
getData();
//ei jäädä odottamaan (asyc)
//tehdään jotain muuta, lisätään vaikka elementtejä sivulle


async function getData(){
    const response = await fetch("https://random-data-api.com/api/v2/appliances");
    const olio = await response.json();
    
    
    console.log(olio.equipment);
   

}


//https://random-data-api.com/api/v2/appliances