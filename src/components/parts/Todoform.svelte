<script lang="ts">
	import { addTodo, deleteCompletedTodo } from '$lib/utils/useTodos';
	import { title } from '../../store';
</script>

<form on:submit|preventDefault={addTodo} class="form">
	<input
		type="text"
		name="todoname"
		placeholder="Todoを登録する"
		bind:value={$title}
		class="input"
	/>
	<button type="submit" class="button" disabled={!$title}> Todoを追加 </button>
	<button type="button" class="button" on:click|preventDefault={deleteCompletedTodo}>
		完了済みのTodoを削除
	</button>
</form>

<style>
	.form {
		font-size: 0;
	}
	.input {
		width: 200px;
	}
	.button {
		margin-left: 5px;
	}
	.button:disabled {
		opacity: 0.5;
		cursor: default;
	}
</style>
