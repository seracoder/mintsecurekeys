<script lang="ts">
	import CardHeader from '$lib/components/CardHeader.svelte';
	import { Toggle } from 'flowbite-svelte';
	import CardPassword from '$lib/components/CardPassword.svelte';
	import { generateCustomPassword } from '$lib/generators';
	import Slider from '$lib/components/Slider.svelte';
	import { RefreshCwIcon } from 'lucide-svelte';

	let { category, copied = $bindable() } = $props();
	let useUppercase = $state(true)
	let useNumbers = $state(true)
	let useLowercase = $state(true)
	let useSymbols = $state(true)
	let customLength = $state(12)

	let customPassword = $derived(generateCustomPassword({ useUppercase, useLowercase, useNumbers, useSymbols, customLength }))

	function regeneratePassword() {
		customLength += 1
		customLength -= 1
	}

</script>

<CardHeader label={category.label} description={category.description} icon={category.icon} >
	<div class="mb-8">
		<CardPassword bind:password={customPassword} bind:copied={copied} />
	</div>

	<div class="mb-6">
		<Slider bind:len={customLength} text="Password Length" min="8" max="128" />
	</div>

	<div class="grid md:grid-cols-2 gap-4 mb-8">
		<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
			<Toggle color="purple" bind:checked={useUppercase} class="w-full flex justify-between">
        <span class="flex items-center gap-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">A</span>
          <span>Uppercase Letters</span>
        </span>
			</Toggle>
		</div>

		<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
			<Toggle color="purple" bind:checked={useLowercase} class="w-full flex justify-between">
        <span class="flex items-center gap-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">a</span>
          <span>Lowercase Letters</span>
        </span>
			</Toggle>
		</div>

		<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
			<Toggle color="purple" bind:checked={useNumbers} class="w-full flex justify-between">
        <span class="flex items-center gap-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">0</span>
          <span>Numbers</span>
        </span>
			</Toggle>
		</div>

		<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
			<Toggle color="purple" bind:checked={useSymbols} class="w-full flex justify-between">
        <span class="flex items-center gap-2">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">#</span>
          <span>Special Characters</span>
        </span>
			</Toggle>
		</div>
	</div>

	<button
		onclick={regeneratePassword}
		tabindex="0"
		aria-label="Generate new password"
		class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 active:scale-98 transition-all duration-150 flex items-center justify-center gap-2 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
	>
		<RefreshCwIcon class="w-5 h-5" />
		Generate New Password
	</button>

</CardHeader>