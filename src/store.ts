import { writable, readable } from 'svelte/store';
import type { Todo } from '$lib/types';

export const todos = writable<Todo[] | null>(null);
