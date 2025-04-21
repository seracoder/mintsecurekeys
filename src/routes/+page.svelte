<script lang="ts">
	import { Check, InfoIcon, LockIcon, RefreshCwIcon } from 'lucide-svelte';
	import { defaultPasswordSettings } from "$lib/generators";
	import { categories, customPasswordConfig, passPhraseConfig, pinConfig, pronounceableConfig } from '$lib/categories';
	import { clsx } from 'clsx';
	import Card from '$lib/components/Card.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CustomPassword from '$lib/components/custom-generators/CustomPassword.svelte';
	import PassphraseGenerator from '$lib/components/custom-generators/PassphraseGenerator.svelte';
	import PinGenerator from '$lib/components/custom-generators/PinGenerator.svelte';
	import PronounceablePassword from '$lib/components/custom-generators/PronounceablePassword.svelte';

	let copied: string | null = $state(null)
	let isGenerating: boolean = $state(false)
	let activeTab: string = $state("memorable")

	const manualTabs = ["custom", "passphrase", "pin", "pronounceable"]
	let passwords = $state(defaultPasswordSettings())

	const regenerateAll = () => {
		isGenerating = true
		passwords = defaultPasswordSettings()
		isGenerating = false
	}

	// Function to determine if a category is active
	function isCategoryActive(categoryId: string) {
		return activeTab === categoryId;
	}
</script>

<main class="min-h-screen flex flex-col items-center p-3 sm:p-6">
	<!-- Header with Logo -->
	<div class="my-8 text-center">
		<div class="flex items-center justify-center mb-2">
			<LockIcon class="h-8 w-8 mr-2 text-purple-500" />
			<h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
				MintSecureKeys
			</h1>
		</div>
		<p class="text-gray-400 text-lg">Create strong, secure passwords with ease</p>
	</div>

	<!-- Navigation Tabs -->
	<div class="w-full max-w-5xl mb-6">
		{#each categories as subCategories, i (i)}
			<div class="flex flex-wrap bg-gray-800/50 backdrop-blur-lg mb-4 rounded-xl border border-gray-700/50 shadow-lg overflow-hidden">
				{#each subCategories as category (category.id)}
					{@const Icon = category.icon}
					<div class="flex-1 min-w-[120px]">
						<button
							class={clsx(
								"w-full py-3 px-4 transition-all duration-300 text-sm font-medium",
								{
									"bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md": isCategoryActive(category.id),
									"hover:bg-gray-700/50 text-gray-300": !isCategoryActive(category.id)
								}
							)}
							onclick={() => {
								activeTab = category.id
								if (manualTabs.includes(category.id)) {
									isGenerating = true
									setTimeout(() => {
										isGenerating = false
									}, 600)
								}
							}}
							aria-pressed={isCategoryActive(category.id)}
						>
							<span class="flex items-center justify-center gap-2">
								<Icon class="h-4 w-4" />
								<span class="whitespace-nowrap">{category.label}</span>
							</span>
						</button>
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<!-- Main Content Area -->
	<div class="w-full max-w-5xl">
		{#if isGenerating}
			<div class="flex items-center justify-center h-40 mb-6">
				<div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
			</div>
		{:else}
			{#if activeTab === "custom"}
				<CustomPassword category={customPasswordConfig} {copied} />
			{:else if activeTab === "passphrase"}
				<PassphraseGenerator category={passPhraseConfig} {copied} />
			{:else if activeTab === "pin"}
				<PinGenerator category={pinConfig} {copied} />
			{:else if activeTab === "pronounceable"}
				<PronounceablePassword category={pronounceableConfig} {copied} />
			{:else}
				<div class="mb-6">
					<button
						onclick={regenerateAll}
						disabled={isGenerating}
						class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-98 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
					>
						<RefreshCwIcon class="h-5 w-5" />
						<span class="font-medium text-lg">Generate New Password Set</span>
					</button>

					<div class="mt-4 bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
						<div class="flex items-start gap-2 text-sm text-gray-300">
							<InfoIcon class="h-5 w-5 text-purple-400" />
							<p>This generates several password types at once. For more control over specific password settings, use the tabs above.</p>
						</div>
					</div>
				</div>
			{/if}

			{#each categories as subCategories, i (i)}
				{#each subCategories as category (category.id)}
					{#if activeTab === category.id && !manualTabs.includes(category.id)}
						<Card {category} bind:passwords={passwords} bind:copied={copied} />
					{/if}
				{/each}
			{/each}
		{/if}
	</div>

	<Footer />

	<!-- Toast Notification for Copy -->
	{#if copied}
		<div class="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-fade-in-up">
			<Check class="h-5 w-5" />
			<span>Copied to clipboard!</span>
		</div>
	{/if}
</main>

<style>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.3s ease-out;
    }

    :global(body) {
        background: rgb(17, 24, 39);
        min-height: 100vh;
    }
</style>