<script>
	import data from '$lib/data';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="grid-outer">
	<div class="grid">
		{#each data as item (item.id)}
			<div class="grid-item">
				<img src={item.thumbnail} alt={item.title} />
				<h3><a href="image/{item.id}">{item.title}</a></h3>
			</div>
		{/each}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
		padding: 20px;
	}

	@media (min-width: 480px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 960px) {
		.grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.grid .grid-item {
		border: 1px solid #4f5a7a;
		border-radius: 3px;
		padding: 10px;
		cursor: pointer;
		transition: border-color 0.3s;
		position: relative;
	}
	.grid .grid-item:hover {
		border-color: #8696c8;
	}
	.grid .grid-item:hover img,
	.grid .grid-item:focus img {
		filter: saturate(1);
	}
	.grid .grid-item h3 {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0;
		padding: 20px 0;
		line-height: 1.6;
	}
	.grid .grid-item h3 a {
		text-decoration: none;
		color: #fff;
	}
	.grid .grid-item h3 a:focus-visible {
		outline: none;
	}
	.grid .grid-item h3 a:focus-visible:after {
		outline: 3px solid #65ece8;
	}
	.grid .grid-item h3 a:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 3px;
	}

	.grid .grid-item img {
		filter: saturate(0.4);
		aspect-ratio: 1.666;
		object-fit: cover;
		transition: 0.3s;
	}
</style>
