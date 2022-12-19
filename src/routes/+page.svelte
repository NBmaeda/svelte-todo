<script lang="ts">
	import { todos } from '../store';
	import fetchTodos from '../fetchTodos';
	import supabase from '$lib/supabase';

	let title = '';

	// type MouseEvnetHandler = (tete: HTMLInputElement, event: MouseEvent) => void;

	const handleSubmit = async () => {
		if (title.trim().length !== 0) {
			await supabase.from('todos').insert({ title, completed: false });
			fetchTodos();
			title = '';
		} else {
			alert('Todoを入力してください。');
		}
	};

	const toggleCompleted = async (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		try {
			const { error } = await supabase
				.from('todos')
				.update({ completed: e.currentTarget.checked })
				.eq('id', e.currentTarget.id);
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

	<form on:submit|preventDefault={handleSubmit}>
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
							name=""
							class="checkbox"
							checked={todo.completed}
							id={todo.id}
							on:click={toggleCompleted}
						/>
						<span class="title">{todo.title}</span>
					</label>
					<button name="" class="button"> 削除 </button>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
</style>
