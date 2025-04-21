<script lang="ts">
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardPassword from '$lib/components/CardPassword.svelte';
	import { generatePassphrase } from '$lib/generators';
	import Slider from '$lib/components/Slider.svelte';
	import { ChartNoAxesGanttIcon, InfoIcon, ShieldIcon } from 'lucide-svelte';

	let { category, copied = $bindable() } = $props();
	let customLength = $state(12);
	let passphrase = $derived(generatePassphrase({passphraseWordCount: customLength}))

	function regeneratePassphrase() {
		customLength += 1
		customLength -= 1
	}

</script>

<CardHeader label={category.label} description={category.description} icon={category.icon}>
	<div class="mb-8">
		<CardPassword bind:password={passphrase} bind:copied={copied} />
	</div>

	<div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700 mb-6">
		<div class="mb-2">
			<h3 class="text-lg font-medium text-white mb-4">Passphrase Settings</h3>

			<div class="mb-5">
				<Slider bind:len={customLength} text="Number of Words" min="3" max="24" />
				<div class="flex justify-between text-xs text-gray-400 px-1 mt-1">
					<span>Shorter</span>
					<span>Longer</span>
				</div>
			</div>

			<div class="mt-5 text-gray-300 text-sm">
				<div class="flex items-start gap-2 mb-2">
					<div class="mt-1 text-purple-400">
						<ShieldIcon class="w-4 h-4" />
					</div>
					<p>Passphrases are easier to remember than random passwords while still providing strong security.</p>
				</div>
				<div class="flex items-start gap-2">
					<div class="mt-1 text-purple-400">
						<InfoIcon class="w-4 h-4" />
					</div>
					<p>For best security, use at least 6 words.</p>
				</div>
			</div>
		</div>
	</div>

	<button
		onclick={regeneratePassphrase}
		tabindex="0"
		aria-label="Generate new passphrase"
		class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 active:scale-98 transition-all duration-150 flex items-center justify-center gap-2 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
	>
		<ChartNoAxesGanttIcon class="w-5 h-5" />
		Generate New Passphrase
	</button>

</CardHeader>