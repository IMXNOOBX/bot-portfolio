<script>
    import { onMount } from 'svelte';   
    import config from '../../config.ts';
    import page from './page.ts'

</script>

<!-- Watermak -->
<div class="absolute z-10 top-0 xs:top-2 xl:bottom-2 xl:top-auto text-white w-full flex items-center justify-center gap-2 text-sm opacity-50">
    Made with 🐱 by 
    <a href="https://github.com/IMXNOOBX" target="_blank" rel="noopener noreferrer" class="font-semibold">@imxnoobx</a>
</div>


<!-- Main content -->
<main class="text-white flex flex-col p-5 xs:p-10 md:px-32 md:py-20 xl:p-40 h-full w-full items-center justify-center gap-4 overflow-x-hidden">
    <h1 class="text-6xl font-bold">{page.title}</h1>
    <p class="text-zinc-400 text-center">{page.description.replaceAll('{bot_name}', config.name)}</p>
    <div class="bg-zinc-800/50 border border-zinc-800 p-4 rounded-xl backdrop-blur-sm">
        {#each page.sections as section}
            <h2 class="text-base font-semibold">{section.title}</h2>
            <p class="text-zinc-500 pl-2">{section.content}</p>
        {/each}
    </div>
</main>
