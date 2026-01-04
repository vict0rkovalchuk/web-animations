<script>
	import { onNavigate } from '$app/navigation';
	import Header from './Header.svelte';
	import './styles.css';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
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
