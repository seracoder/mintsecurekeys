<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
	<div class="container mx-auto">
		{@render children()}
	</div>
</div>
