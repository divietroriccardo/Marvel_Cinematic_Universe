import { defineStore} from 'pinia'

export const useListStore = defineStore ('list',
{
	state: () => (
	{
		list: [],
	}),
	
	getters: 
	{
		getList: (state) => state.list,

		getFilteredList: (state) =>
		{
			return (filter) =>
			{
				let filteredList = []

				switch (filter)
				{
					case "Film":
						filteredList = state.list.filter(function(item)
						{
							return item.type == filter
						})
						break;

					case "SerieTV":
						filteredList = state.list.filter(function(item)
						{
							return item.type == "Serie TV"
						})
						break;

					case "Speciali":
						filteredList = state.list.filter(function(item)
						{
							return item.type == "Speciale"
						})
						break;

					case "Cortometraggi":
						filteredList = state.list.filter(function(item)
						{
							return item.type == "Cortometraggio"
						})
						break;

					case "WebSerie":
						filteredList = state.list.filter(function(item)
						{
							return item.type == "Web Serie"
						})
						break;

					default:
						filteredList = state.list
				}

				return filteredList
			}
		}
	},

	actions: 
	{
		loadData()
		{
			fetch ("http://localhost:8883/shows")
				.then((res) => res.json())
					.then((res) => this.list = res) 
		},
	},
})