async function getFundraisers () {
    // create URL for API endpoint
    const url = `${import.meta.env.VITE_API_URL}/fundraisers`;

    // use the fetch function to make a GET request to the API endpoint
    const response = await fetch(url, {method: 'GET'});

    // check if the response is successful
    if (!response.ok) {
        const fallbackError = "Error fetching fundraisers";

    // if the response is not successful, throw an error with a fallback message
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        // check the data details and if we are confused about the error details, use the fallback message
        const errorMessage = data?.details ?? fallbackError;
        throw new Error(errorMessage);
    }

    // if the response is successful, parse the JSON data and return it
    return await response.json();
}

export default getFundraisers;