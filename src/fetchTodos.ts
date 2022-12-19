import supabase from '$lib/supabase';
import { todos } from './store';

const fetchTodos = () => {
	const fetch = async () => {
		try {
			const { data, error } = await supabase
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
