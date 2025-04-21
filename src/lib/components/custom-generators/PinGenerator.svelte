<script lang="ts">
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardPassword from '$lib/components/CardPassword.svelte';
	import { generatePin } from '$lib/generators';
	import { Radio } from 'flowbite-svelte';
	import { InfoIcon, LockIcon } from 'lucide-svelte';

	let { category, copied = $bindable() } = $props();
	let customLength = $state(4);
	let pin = $derived(generatePin({ pinLength: customLength }))

	function regeneratePin() {
		customLength += 1
		customLength -= 1
	}

</script>

<CardHeader label={category.label} description={category.description} icon={category.icon}>
	<div class="mb-8">
		<CardPassword bind:password={pin} bind:copied={copied} />
	</div>

	<div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700 mb-6">
		<h3 class="text-lg font-medium text-white mb-4">PIN Length</h3>

		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
			<div class="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
				<Radio name="customLength" color="purple" value={4} bind:group={customLength} class="w-full">
					<div class="flex flex-col items-center">
						<span class="text-lg font-bold text-white">4</span>
						<span class="text-xs text-gray-400">digits</span>
					</div>
				</Radio>
			</div>

			<div class="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
				<Radio name="customLength" color="purple" value={6} bind:group={customLength} class="w-full">
					<div class="flex flex-col items-center">
						<span class="text-lg font-bold text-white">6</span>
						<span class="text-xs text-gray-400">digits</span>
					</div>
				</Radio>
			</div>

			<div class="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
				<Radio name="customLength" color="purple" value={8} bind:group={customLength} class="w-full">
					<div class="flex flex-col items-center">
						<span class="text-lg font-bold text-white">8</span>
						<span class="text-xs text-gray-400">digits</span>
					</div>
				</Radio>
			</div>

			<div class="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
				<Radio name="customLength" color="purple" value={10} bind:group={customLength} class="w-full">
					<div class="flex flex-col items-center">
						<span class="text-lg font-bold text-white">10</span>
						<span class="text-xs text-gray-400">digits</span>
					</div>
				</Radio>
			</div>
		</div>

		<div class="mt-4 text-gray-300 text-sm flex items-start gap-2">
			<div class="mt-1 text-purple-400">
				<InfoIcon class="w-4 h-4" />
			</div>
			<p>Longer PINs provide better security. Consider using at least 6 digits for important accounts.</p>
		</div>
	</div>

	<button
		onclick={regeneratePin}
		tabindex="0"
		aria-label="Generate new PIN"
		class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
	>
		<LockIcon class="w-5 h-5" />
		Generate New PIN
	</button>
</CardHeader>