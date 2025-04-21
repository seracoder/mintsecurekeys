<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';

	let { password = $bindable(), copied = $bindable() } = $props();

	const copyToClipboard = async (text: string) => {
		await navigator.clipboard.writeText(text)
		copied = text
		setTimeout(() => {
			copied = null;
		}, 2000)
	}
</script>

<div
	class="bg-gray-900 p-4 rounded-lg cursor-pointer hover:bg-gray-850 transition-colors duration-200 flex items-center justify-between group overflow-x-auto"
>
	<code class="font-mono text-sm text-gray-300 whitespace-nowrap">{password}</code>
	<button onclick={() => copyToClipboard(password)} class="ml-2 flex-shrink-0">
		{#if copied === password}
			<Check class="h-4 w-4 text-green-500" />
		{:else}
			<Copy class="h-4 w-4 text-gray-500 group-hover:text-purple-400" />
		{/if}
	</button>
</div>