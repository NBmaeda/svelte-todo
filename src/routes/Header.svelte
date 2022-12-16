<script>
	import logo from '$lib/images/svelte-logo.svg';
</script>

<header class="header">
	<h1 class="title">
		<a href="https://kit.svelte.dev" class="logo">
			<img src={logo} alt="SvelteKit" width="auto" height="48" />
		</a>
		Todo App
	</h1>
</header>

<style>
	.header {
		padding: 10px 20px;
		background: #444;
		color: #fff;
	}
	.title {
		display: flex;
		align-items: center;
		margin: 0;
		font-size: 1.5em;
	}
	.logo {
		display: inline-block;
		margin-right: 5px;
	}
</style>
