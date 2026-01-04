<script>
	import data from '$lib/data';
	import cameraIcon from '$lib/images/camera-svgrepo-com.svg';
	import dateIcon from '$lib/images/date-range-svgrepo-com.svg';
	import { page } from '$app/stores';
	$: item = data.find((i) => `${i.id}` === $page.params.id);
</script>

<svelte:head>
	<title>{item?.title}</title>
</svelte:head>

<div class="item">
	<img src={item?.image} alt={item?.title} />
	<h2>{item?.title}</h2>
	<div class="info">
		<div class="date info-item">
			<img src={dateIcon} alt="" />
			<span>19 November 2019</span>
		</div>
		<div class="camera info-item">
			<img src={cameraIcon} alt="" />
			<span>Sony Alpha 8</span>
		</div>
	</div>
	<div class="description">
		<p>
			The house creaked with an unsettling silence, a stark contrast to the joyous chaos that once
			filled it. Dust motes danced in the pale slivers of sunlight filtering through the blinds,
			illuminating the empty space where his favorite chair used to be. The worn leather, once a
			testament to countless evenings spent reading and sharing stories, now gaped like a missing
			tooth, a constant reminder of the gaping hole left in their lives.
		</p>
	</div>
</div>

<style>
	.item {
		padding: 20px;
		max-width: 800px;
	}

	.item h2 {
		font-size: 2rem;
		font-weight: 500;
		letter-spacing: 2px;
	}
	.item .info .info-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
	.item .info .info-item img {
		width: 24px;
		margin-right: 10px;
	}
	.item .description p {
		line-height: 1.8;
		margin-top: 40px;
	}
</style>
