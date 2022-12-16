import supabaseClient from '$lib/supabaseClient';
import type { Todo } from '$lib/types';
import { todos } from './store';

const fetchTodos = () => {
	const fetch = async () => {
		try {
			const { data, error } = await supabaseClient
				.from('todos')
				.select('*')
				.order('created_at', { ascending: false });
			if (error) throw error;

			todos.set(data);
		} catch (error) {
			alert(error);
			todos.set([]);
		}
	};
	fetch();
};

export default fetchTodos;
