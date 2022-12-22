<script lang="ts">
	import { onMount } from 'svelte';
	import TodoList from '../components/parts/TodoList.svelte';
	import Todoform from '../components/parts/Todoform.svelte';
	import { fetchTodos } from '$lib/utils/useTodos';

	onMount(() => {
		fetchTodos();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
	<h2 class="title">Todo一覧</h2>

	<Todoform />

	<TodoList />
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title {
		text-align: center;
		font-weight: 600;
	}
</style>
