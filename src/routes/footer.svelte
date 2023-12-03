<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,

        P

	} from 'flowbite-svelte';

	const date = new Date();
</script>
<div>
	<div class="bg-autism-blue">
		<Footer class="!bg-autism-blue">
			<P size="sm" class="text-white">Adaptive Judo {date.getFullYear()}</P>
			<FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 mr-5">
				<FooterLink href='/bibliography'>References</FooterLink>
				<FooterLink href='/partners'>Thanks to:</FooterLink>
				<!-- <FooterLink href=''>Contact Email</FooterLink> -->
			</FooterLinkGroup>
		</Footer>
	</div>
</div>