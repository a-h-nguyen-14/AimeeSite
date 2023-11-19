<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
</script>

<Navbar let:hidden let:toggle class="!bg-autism-blue">
    <NavBrand href="/">
      <Heading class="text-white">Adapted Judo</Heading>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} >
      <NavLi href="/" class="text-white">Home</NavLi>
      <NavLi class="cursor-pointer text-white">
        FactSheets<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/characteristics">What is Autism?</DropdownItem>
        <DropdownItem href="/judo">Why Judo?</DropdownItem>
        <DropdownItem href="/classes">Coaching Guidelines</DropdownItem>
      </Dropdown>
      <NavLi class="cursor-pointer text-white">
        Getting Started<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/docs/components/navbar">Enrolment Process</DropdownItem>
        <DropdownItem href="/">Class Ideas</DropdownItem>
        <DropdownItem href="/">Resources</DropdownItem>
      </Dropdown>
      <!-- <NavLi href="/about">Our Purpose</NavLi>
      <NavLi href="/bibliography">Bibliography</NavLi> -->
    </NavUl>
  </Navbar>

<style>

</style>