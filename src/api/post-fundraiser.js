  async function postFundraiser(fundraiserData, token) {
    const url =                                            
  `${import.meta.env.VITE_API_URL}/fundraisers/`;
    const dataWithDefaults = {
      image: "https://via.placeholder.com/400",
      ...fundraiserData,
    };
    const body = new FormData();
    Object.entries(dataWithDefaults).forEach(([key, value]) => {
      if (value !== undefined && value !== "") body.append(key, value);
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
      },
      body,
    });                                                    
  
    if (!response.ok) {
      const fallbackError = `Error creating fundraiser (${response.status})`;
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
      console.error("API error response:", data);
      const errorMessage = data?.detail ?? JSON.stringify(data) ?? fallbackError;
      throw new Error(errorMessage);
    }
                                                           
    return await response.json();
  }

  export default postFundraiser;