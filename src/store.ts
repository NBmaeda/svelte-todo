import { writable, readable } from 'svelte/store';
import type { Todo } from '$lib/types';

export const title = writable('');
export const todos = writable<Todo[] | undefined>(undefined);
