<script lang="ts">
	import { todos } from '../../store';
	import TodoItem from './TodoItem.svelte';
</script>

{#if $todos === undefined}
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
			<TodoItem {todo} />
		{/each}
	</ul>
{/if}

<style>
	.list {
		width: 600px;
		margin: 30px auto;
		padding: 0;
		list-style: none;
	}
</style>
