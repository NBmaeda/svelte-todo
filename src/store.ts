import { writable, readable } from 'svelte/store';
import type { Todo } from '$lib/types';

export const todos = writable<Todo[] | null>([
	{
		title: 'test todo 1',
		id: '1',
		completed: false,
		created_at: new Date()
	},
	{
		title: 'test todo 2',
		id: '2',
		completed: true,
		created_at: new Date()
	}
]);
