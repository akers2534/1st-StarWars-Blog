const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			starships:[],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				try{
					let url = "https://www.swapi.tech/api/people/"
					const response = await fetch(url)
					const data = await response.json()
					console.log(data) 
					setStore({people:data.results})
	
				}
				catch(error){
					throw Error(error)
				} 
	
			},
			getPlanets: async () => {
				try{
					let url = "https://www.swapi.tech/api/planets/"
					const response = await fetch(url)
					const data = await response.json()
					console.log(data) 
					setStore({planets:data.results})
		
				}
				catch(error){
					throw Error(error)
				}
		
			},
			getPlanets: async () => {
				try{
					let url = "https://www.swapi.tech/api/starships/"
					const response = await fetch(url)
					const data = await response.json()
					console.log(data) 
					setStore({starships:data.results})
		
				}
				catch(error){
					throw Error(error)
				}
		
			},
		
			},
	};
};
export default getState;


