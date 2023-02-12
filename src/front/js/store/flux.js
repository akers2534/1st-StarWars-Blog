const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      starships: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
        try {
          let url = "https://swapi.dev/api/people/";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setStore({ people: data.results });
        } catch (error) {
          throw Error(error);
        }
      },
      getPlanets: async () => {
        try {
          let url = "https://swapi.dev/api/planets/";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setStore({ planets: data.results });
        } catch (error) {
          throw Error(error);
        }
      },
      getStarships: async () => {
        try {
          let url = "https://swapi.dev/api/starships/";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setStore({ starships: data.results });
        } catch (error) {
          throw Error(error);
        }
      },
      addFavorite: (name) => {
        const store = getStore();
        let newFavorites = [...store.favorites, name];
        let uniqueFavorites = [...new Set(newFavorites)]
          setStore({ favorites:uniqueFavorites  });
        
      },
      removeFavorite: (position) => {
        const store = getStore();
        let newFavorites = store.favorites.filter((item,index)=>index!=position)
          setStore({ favorites:newFavorites  });
        
      },

    },
  };
};
export default getState;
