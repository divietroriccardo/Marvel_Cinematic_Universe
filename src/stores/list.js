import { defineStore} from 'pinia'

export const useListStore = defineStore ('list',
{
	state: () => (
	{
		list: [],
	}),
	
	getters: 
	{
		getList: (state) => state.list
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