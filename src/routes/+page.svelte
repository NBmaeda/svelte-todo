<script lang="ts">
	import Counter from './Counter.svelte';
	import { todos } from '../store';
	import fetchTodos from '../fetchTodos';

	fetchTodos();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
	<h2 class="title">Todo一覧</h2>

	<form>
		<input type="text" name="todoname" placeholder="Todoを登録する" value="title" class="input" />
		<button type="submit" class="button"> Todoを追加 </button>
		<button type="button" class="button"> 完了済みのTodoを削除 </button>
	</form>

	<ul class="list">
		{#if $todos !== null}
			{#each $todos as todo (todo.id)}
				<li class="listItem">
					<label class="label">
						<input type="checkbox" name="" class="checkbox" checked={todo.completed} />
						<span class="title">{todo.title}</span>
					</label>
					<button name="" class="button"> 削除 </button>
				</li>
			{/each}
		{/if}
	</ul>
</section>

<style>
</style>
