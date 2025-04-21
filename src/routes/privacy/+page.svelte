<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowLeftIcon, ShieldIcon } from 'lucide-svelte';
</script>

<main class="min-h-screen">
	<div class="container max-w-3xl mx-auto py-12 px-4">
		<a href="/" class="inline-block mb-8">
			<Button class="flex items-center gap-2 text-gray-400 hover:text-white">
				<ArrowLeftIcon class="h-4 w-4" />
				Back to Generator
			</Button>
		</a>

		<div class="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-lg">
			<div class="flex items-center gap-3 mb-6">
				<ShieldIcon class="h-8 w-8 text-purple-400" />
				<h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
					Privacy Policy
				</h1>
			</div>

			<div class="space-y-6 text-gray-300">
				<section>
					<h2 class="text-xl font-semibold text-white mb-3">No Logging Policy</h2>
					<p>
						MintSecureKeys is designed with your privacy as the top priority. We do not log, store, or track any
						passwords or keys that you generate using our service.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-semibold text-white mb-3">Client-Side Generation</h2>
					<p>
						All password and key generation happens entirely in your browser. The code runs locally on your device,
						and no data is sent to our servers during the generation process.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-semibold text-white mb-3">No Personal Information</h2>
					<p>
						We do not collect any personal information, including but not limited to names, email addresses, IP
						addresses, or device information.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-semibold text-white mb-3">No Cookies or Tracking</h2>
					<p>
						MintSecureKeys does not use cookies or any tracking technologies to monitor your activity or behavior on
						our website.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-semibold text-white mb-3">No Third-Party Services</h2>
					<p>
						We do not integrate with any third-party analytics, advertising, or tracking services that could
						compromise your privacy.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-semibold text-white mb-3">Security Recommendations</h2>
					<p>
						While we provide tools to generate secure passwords, we recommend taking additional security measures:
					</p>
					<ul class="list-disc pl-6 mt-2 space-y-1">
						<li>Use a reputable password manager to store your passwords</li>
						<li>Enable two-factor authentication when available</li>
						<li>Regularly change your passwords for sensitive accounts</li>
						<li>Never share your passwords with others</li>
					</ul>
				</section>

				<section>
					<h2 class="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
					<p>
						If we make any changes to this privacy policy, we will update this page. We encourage you to
						periodically review this page for the latest information on our privacy practices.
					</p>
				</section>

				<section>
					<h2 class="text-xl font-semibold text-white mb-3">Contact Us</h2>
					<p>
						If you have any questions or concerns about our privacy policy, please contact us at
						<span class="text-purple-400">privacy@mintsecurekeys.com</span>.
					</p>
				</section>
			</div>

			<div class="mt-10 pt-6 border-t border-gray-700 text-gray-400 text-sm">
				<p>Last updated: {new Date().toLocaleDateString()}</p>
			</div>
		</div>
	</div>
</main>
  