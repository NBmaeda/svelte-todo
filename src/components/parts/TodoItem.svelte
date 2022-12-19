<script lang="ts">
	import type { Todo } from '$lib/types';
	import { deleteTodo, toggleCompleted } from '$lib/utils/supabase';
	export let todo: Todo;
</script>

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

<style>
	.listItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
	}
	.label {
		display: flex;
		align-items: center;
		width: 100%;
		cursor: pointer;
	}
	.checkbox {
		margin: auto 0.2em;
	}
	.title {
		display: inline-block;
		word-break: break-all;
		padding: 0.18em;
	}
	.button {
		flex-shrink: 0;
	}
</style>
