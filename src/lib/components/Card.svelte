<script lang="ts">
import { clsx } from 'clsx';
import CardHeader from '$lib/components/CardHeader.svelte';
import CardPassword from '$lib/components/CardPassword.svelte';

let { category, passwords = $bindable(), copied = $bindable() } = $props();


</script>

<CardHeader label={category.label} description={category.description} icon={category.icon}>
	<div class={clsx(
			'grid grid-cols-1 gap-4',
			{
				'md:grid-cols-2': category.gridCols === 2,
				'md:grid-cols-3': category.gridCols === 3,
				'md:grid-cols-4': category.gridCols === 4,
			}
		)}>
		{#each passwords[category.id] as password, index (index)}
			<CardPassword {password} bind:copied={copied} />
		{/each}
	</div>
</CardHeader>