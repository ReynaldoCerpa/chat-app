import { headers } from "../config/headers"

export const checkTime = async (id : string) => {

    const values = {
        idGuia: id,
    }

    const response = await fetch(`http://localhost:8080/guides/checkTime`, {
            method: "post",
            headers: headers,
            body: JSON.stringify(values)
        }
    );

    if(response.ok){
        const data = await response.json();
        return [response.ok,data];
    } else {
        const data = await response.json();
        return [response.ok,data];
    }
      
}