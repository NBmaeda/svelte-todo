import { get } from 'svelte/store';
import supabase from '$lib/supabase';
import fetchTodos from '$lib/utils/fetchTodos';
import { title } from '../../store';

export const addTodo = async () => {
	if (get(title).trim().length !== 0) {
		try {
			const { error } = await supabase
				.from('todos')
				.insert({ title: get(title), completed: false });
			if (error) throw error;
			fetchTodos();
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
		const { error } = await supabase.from('todos').delete().match({ id: e.currentTarget.name });
		if (error) throw error;
		fetchTodos();
	} catch (error) {
		alert(error);
	}
};

export const deleteCompletedTodo = async (e: Event) => {
	try {
		const { error } = await supabase.from('todos').delete().match({ completed: true });
		if (error) throw error;
		fetchTodos();
	} catch (error) {
		alert(error);
	}
};

export const toggleCompleted = async (
	e: Event & { currentTarget: EventTarget & HTMLInputElement }
) => {
	try {
		const { error } = await supabase
			.from('todos')
			.update({ completed: e.currentTarget.checked })
			.eq('id', e.currentTarget.name);
		if (error) throw error;
		fetchTodos();
	} catch (error) {
		alert(error);
	}
};
