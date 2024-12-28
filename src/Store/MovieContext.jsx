const url = "https://imdb236.p.rapidapi.com/imdb/";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3cb5a109f4msh460620cd7f1888fp11b688jsn5cc925f2565b",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};

export const FetchAllData = async () => {
  try {
    if (localStorage.getItem("moviinfo-list") === null) {
      const response = await fetch(url.concat("top250-movies"), options);
      const text = response.text();
      text.then((data) => {
        console.log(JSON.parse(data));
        localStorage.setItem("moviinfo-list", data);
      });
    }
  } catch (error) {
    console.error(error);
  }
};
