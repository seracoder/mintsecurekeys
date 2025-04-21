<script lang="ts">
	let { label, description, icon, children } = $props();
	const Icon = $derived(icon);
</script>

<div class="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 w-full max-w-5xl p-6 mt-4 rounded-2xl shadow-xl">
	<div class="flex items-center gap-3 mb-5">
		<Icon class="h-5 w-5 text-purple-400" />
		<h2 class="text-2xl font-semibold leading-none tracking-tight">{label}</h2>
	</div>
	<p class="text-sm text-muted-foreground text-gray-400 mt-1 mb-4">{description}</p>
	{@render children?.()}
</div>