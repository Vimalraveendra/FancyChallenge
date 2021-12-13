export const fetchData = async (url) => {
    console.log('uel',url)
    try {
      const response= await fetch(url)
      const data = await response.json();
      console.log('data',data)
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };