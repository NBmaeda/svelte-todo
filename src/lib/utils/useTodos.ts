import supabase from '$lib/supabase';
import { get } from 'svelte/store';
import { todos } from '../../store';
import { title } from '../../store';

export const fetchTodos = async () => {
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

export const addTodo = async () => {
	if (get(title).trim().length !== 0) {
		try {
			const { data, error } = await supabase
				.from('todos')
				.insert({ title: get(title), completed: false })
				.select();
			if (error) throw error;
			todos.update((todos) => {
				if (Array.isArray(todos)) {
					const newTodos = [data[0], ...todos];
					return newTodos;
				}
				return todos;
			});
			title.set('');
		} catch (error) {
			alert(error);
		}
	} else {
		alert('Todoを入力してください。');
	}
};

export const deleteTodo = async (e: Event & { currentTarget: EventTarget & HTMLButtonElement }) => {
	try {
		const { data, error } = await supabase
			.from('todos')
			.delete()
			.match({ id: e.currentTarget.name })
			.select();
		if (error) throw error;
		todos.update((todos) => {
			if (Array.isArray(todos)) {
				const newTodos = todos.filter((todo) => todo.id !== data[0].id);
				return newTodos;
			}
			return todos;
		});
	} catch (error) {
		alert(error);
	}
};

export const deleteCompletedTodo = async (e: Event) => {
	try {
		const { error } = await supabase.from('todos').delete().match({ completed: true });
		if (error) throw error;
		todos.update((todos) => {
			if (Array.isArray(todos)) {
				const newTodos = todos.filter((todo) => todo.completed === false);
				return newTodos;
			}
			return todos;
		});
	} catch (error) {
		alert(error);
	}
};

export const toggleCompleted = async (
	e: Event & { currentTarget: EventTarget & HTMLInputElement }
) => {
	try {
		const { data, error } = await supabase
			.from('todos')
			.update({ completed: e.currentTarget.checked })
			.eq('id', e.currentTarget.name)
			.select();
		if (error) throw error;
		todos.update((todos) => {
			if (Array.isArray(todos)) {
				todos.forEach((todo) => {
					if (todo.id === data[0].id) todo.completed = !todo.completed;
				});
			}
			return todos;
		});
	} catch (error) {
		alert(error);
	}
};
