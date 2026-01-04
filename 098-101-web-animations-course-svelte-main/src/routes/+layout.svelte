<script>
	import { onNavigate } from '$app/navigation';
	import Header from './Header.svelte';
	import './styles.css';

	onNavigate((navigation) => {
		const isBack = navigation.from.url.pathname.startsWith('/image') && navigation.to.url.pathname === '/';

		if (!document.startViewTransition) return;
		return new Promise(async (resolve) => {
			if (isBack) document.documentElement.classList.add('back');

			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});

			await transition.finished;
			document.documentElement.classList.remove('back');
		});
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
</style>
