<script lang="ts">
	import { todos } from '../store';
	import fetchTodos from '../fetchTodos';
	import supabase from '$lib/supabase';

	let title = '';

	const addTodo = async () => {
		if (title.trim().length !== 0) {
			try {
				const { error } = await supabase.from('todos').insert({ title, completed: false });
				if (error) throw error;
				fetchTodos();
				title = '';
			} catch (error) {
				alert(error);
			}
		} else {
			alert('Todoを入力してください。');
		}
	};

	const deleteTodo = async (e: Event & { currentTarget: EventTarget & HTMLButtonElement }) => {
		try {
			const { error } = await supabase.from('todos').delete().match({ id: e.currentTarget.name });
			if (error) throw error;
			fetchTodos();
		} catch (error) {
			alert(error);
		}
	};

	const toggleCompleted = async (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		try {
			const { error } = await supabase
				.from('todos')
				.update({ completed: e.currentTarget.checked })
				.eq('id', e.currentTarget.name);
			if (error) throw error;
		} catch (error) {
			alert(error);
		}
		fetchTodos();
	};

	fetchTodos();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
	<h2 class="title">Todo一覧</h2>

	<form on:submit|preventDefault={addTodo}>
		<input
			type="text"
			name="todoname"
			placeholder="Todoを登録する"
			bind:value={title}
			class="input"
		/>
		<button type="submit" class="button" disabled={!title}> Todoを追加 </button>
		<button type="button" class="button"> 完了済みのTodoを削除 </button>
	</form>

	{#if $todos === null}
		<div>
			<p>loading...</p>
		</div>
	{:else if !$todos.length}
		<div>
			<p>まだTodoが登録されていません。</p>
		</div>
	{:else}
		<ul class="list">
			{#each $todos as todo (todo.id)}
				<li class="listItem">
					<label class="label">
						<input
							type="checkbox"
							class="checkbox"
							checked={todo.completed}
							name={todo.id}
							on:click={toggleCompleted}
						/>
						<span class="title">{todo.title}</span>
					</label>
					<button name={todo.id} class="button" on:click|preventDefault={deleteTodo}> 削除 </button>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
</style>
