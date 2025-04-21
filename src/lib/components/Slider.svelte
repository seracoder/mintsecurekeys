<script lang="ts">
	let { len = $bindable(), text, min='6', max='128' } = $props();
</script>

<div class="mb-2">
	<div class="flex justify-between items-center mb-2">
		<label for="password-length" class="text-sm font-medium text-gray-300">{text}</label>
		<span class="bg-purple-500/20 text-purple-400 text-sm font-bold py-1 px-3 rounded-full">{len}</span>
	</div>
	<input
		type="range"
		id="password-length"
		class="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
		min={min}
		max={max}
		bind:value={len}
	>
</div>
