<script>
	import { ActivityIcon, LockIcon, ShieldIcon } from 'lucide-svelte';
</script>

<div class="w-full max-w-5xl grid md:grid-cols-3 gap-6 mt-8">
	<div class="bg-gray-800/40 border border-gray-700/50 p-5 rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all duration-300">
		<div class="flex items-center gap-3 mb-3">
			<div class="bg-purple-500/20 p-2 rounded-lg">
				<ShieldIcon class="h-5 w-5 text-purple-400" />
			</div>
			<h3 class="text-lg font-medium text-white">Password Safety</h3>
		</div>
		<p class="text-gray-300 text-sm">Use unique passwords for each account. Never reuse passwords across different websites or services.</p>
	</div>

	<div class="bg-gray-800/40 border border-gray-700/50 p-5 rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all duration-300">
		<div class="flex items-center gap-3 mb-3">
			<div class="bg-purple-500/20 p-2 rounded-lg">
				<LockIcon class="h-5 w-5 text-purple-400" />
			</div>
			<h3 class="text-lg font-medium text-white">Password Manager</h3>
		</div>
		<p class="text-gray-300 text-sm">Consider using a password manager to securely store your complex passwords and simplify your login process.</p>
	</div>

	<div class="bg-gray-800/40 border border-gray-700/50 p-5 rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all duration-300">
		<div class="flex items-center gap-3 mb-3">
			<div class="bg-purple-500/20 p-2 rounded-lg">
				<ActivityIcon class="h-5 w-5 text-purple-400" />
			</div>
			<h3 class="text-lg font-medium text-white">2FA Protection</h3>
		</div>
		<p class="text-gray-300 text-sm">Enable two-factor authentication (2FA) whenever possible for an additional layer of security beyond just passwords.</p>
	</div>
</div>

<div class="mt-12 text-center text-gray-500 text-sm max-w-5xl">
	<h3 class="text-gray-300 mb-2 text-lg">Password Recommendations</h3>
	<p class="mb-4">
		Your online passwords should always be between 8-12 characters long (more is always better) and should always
		include a combination of letters (both upper and lowercase), numbers, and symbols. Don't forget to change your
		passwords regularly.
	</p>
	<p>
		© {new Date().getFullYear()} MintSecureKeys —
		<a href="/privacy" class="text-purple-400 hover:underline">
			Privacy
		</a> | <a href="https://github.com/seracoder/mintsecurekeys" class="text-purple-400 hover:underline">
		Github
	</a>
	</p>
</div>