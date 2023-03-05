const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
        try {
          let url =
            "https://3001-plum-goldfish-z9ght4q2wtw.ws-us89.gitpod.io/api/people/";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setStore({ people: data });
        } catch (error) {
          throw Error(error);
        }
      },
      getPlanets: async () => {
        try {
          let url =
            "https://3001-plum-goldfish-z9ght4q2wtw.ws-us89.gitpod.io/api/planets";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setStore({ planets: data });
        } catch (error) {
          throw Error(error);
        }
      },
      getVehicles: async () => {
        try {
          let url =
            "https://3001-plum-goldfish-z9ght4q2wtw.ws-us89.gitpod.io/api/vehicles";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setStore({ vehicles: data });
        } catch (error) {
          throw Error(error);
        }
      },
      addFavorite: (name) => {
        const store = getStore();
        let newFavorites = [...store.favorites, name];
        let uniqueFavorites = [...new Set(newFavorites)];
        setStore({ favorites: uniqueFavorites });
      },
      removeFavorite: (position) => {
        const store = getStore();
        let newFavorites = store.favorites.filter(
          (item, index) => index != position
        );
        setStore({ favorites: newFavorites });
      },
    },
  };
};
export default getState;
