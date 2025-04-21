<script lang="ts">
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardPassword from '$lib/components/CardPassword.svelte';
	import { generatePronounceablePassword } from '$lib/generators';
	import Slider from '$lib/components/Slider.svelte';
	import { SmileIcon, SquarePenIcon } from 'lucide-svelte';

	let { category, copied = $bindable() } = $props();
	let customLength = $state(12);
	let password = $derived(generatePronounceablePassword({ pronounceableLength: customLength }))

	function regeneratePassword() {
		customLength += 1
		customLength -= 1
	}

</script>

<CardHeader label={category.label} description={category.description} icon={category.icon}>
	<div class="mb-8">
		<CardPassword bind:password={password} bind:copied={copied} />
	</div>

	<div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700 mb-6">
		<h3 class="text-lg font-medium text-white mb-4">Password Settings</h3>

		<div class="mb-5">
			<Slider bind:len={customLength} text="Password Length" min="6" max="24"/>
			<div class="flex justify-between text-xs text-gray-400 px-1 mt-1">
				<span>Shorter</span>
				<span>Longer</span>
			</div>
		</div>

		<div class="mt-5 text-gray-300 text-sm">
			<div class="flex items-start gap-2">
				<div class="mt-1 text-purple-400">
					<SmileIcon class="h-4 w-4" />
				</div>
				<p>Pronounceable passwords are easier to remember while still providing good security. For best protection, use at least 12 characters.</p>
			</div>
		</div>
	</div>

	<button
		onclick={regeneratePassword}
		tabindex="0"
		aria-label="Generate new pronounceable password"
		class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
	>
		<SquarePenIcon class="w-5 h-5" />
		Generate New Pronounceable Password
	</button>
</CardHeader>