const API_URL = "https://jsonplaceholder.typicode.com/users/1";

type PlaceholderUser = {  //if we open the link this is somwwhat similiar format we r getting the data
    id: number,
    name: string,
    email: string,
    company: {
        name: string,
    }
}

type PublicUser = { // this is the format we gonna transform the incoming data and send to our client
    id: number,
    name: string,
    email: string,
    company: string
}

function transformUser(rawData: PlaceholderUser): PublicUser {
    return {
        id: rawData.id,
        name: rawData.name,
        email: rawData.email,
        company: rawData.company.name
    }
}

async function fetchExternalUser(): Promise<void> {
    
    // AbortController lets us cancel an inprogress fetch request
    const controller = new AbortController()

    const timeOut = setTimeout(() => {
        controller.abort()
    }, 10000)
    
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            signal: controller.signal
        })

        if (!response.ok) {
            console.error(`upstream API failed wioth http ${response.status}`);
            return
        }

        const rawUser = (await response.json()) as PlaceholderUser

        const user = transformUser(rawUser)
        console.log(user);
        
    } catch(error) {
        if (error instanceof Error && error.name === "AbortError") {
            //AbortError is special error thrown when an ongoing async op is delibearately cancelled
            console.error("request failed because upstream api took longer than 10 seconds to respond");
            return
        }

        const message = error instanceof Error ? error.message : "unknown";
        console.error("External api failed", message)
    } finally {
        clearTimeout(timeOut);
    }
}

fetchExternalUser()