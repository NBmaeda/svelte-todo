<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	// import supabaseClient from '$lib/server/supabaseClient';

	// let todos: [] | null;
	// const fetchTodos = async () => {
	// 	try {
	// 		const { data, error } = await supabase
	// 			.from('todos')
	// 			.select('*')
	// 			.order('created_at', { ascending: false });
	// 		if (error) throw error;

	// 		todos = data;
	// 	} catch (error) {
	// 		alert(error);
	// 		todot = [];
	// 	}
	// };
	// console.log(process.env);
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
		<li class="listItem">
			<label class="label">
				<input type="checkbox" name="" class="checkbox" />
				<span class="title">todo title</span>
			</label>
			<button name="" class="button"> 削除 </button>
		</li>
	</ul>
</section>

<style>
</style>
