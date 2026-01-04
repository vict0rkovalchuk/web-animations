<script>
	import backIcon from '$lib/images/back-svgrepo-com.svg';
	import { page } from '$app/stores';
	$: isSingleImagePage = $page.url.pathname.startsWith('/image');
	$: isHomePage = $page.url.pathname === '/';

</script>

<header class="header" class:is-single={isSingleImagePage} class:is-home={isHomePage}>
	<div class="header-inner">
		{#if isSingleImagePage}
			<a class="grid-view-button" href="/">
				<span class="visually-hidden">Back to Home Page</span>
				<img src={backIcon} alt="" />
			</a>
		{/if}

		<div class="title">
			<h1>Echoes of What Was</h1>
		</div>
	</div>
</header>

<style>
	.header {
		background-color: #0c0d12;
		position: sticky;
		top: 0;
		z-index: 100;
		view-transition-name: header;
	}
	.header .header-inner {
		height: var(--header-height);
		display: flex;
		padding: 0 20px;
		justify-content: center;
		align-items: center;
	}
	.header.is-single .header-inner {
		justify-content: flex-start;
	}

	.header .title {
		view-transition-name: header-title;
	}

	.header .title h1 {
		color: #c7d0e9;
		font-weight: 400;
		font-size: 1.5rem;
	}
	@media (min-width: 960px) {
		.header .title h1 {
			font-size: 2rem;
		}
	}
	.header .grid-view-button {
		border: none;
		padding: 0;
		margin: 0;
		background: transparent;
		margin-right: 20px;
		cursor: pointer;
	}
	.header .grid-view-button img {
		width: 20px;
		vertical-align: middle;
	}
</style>
