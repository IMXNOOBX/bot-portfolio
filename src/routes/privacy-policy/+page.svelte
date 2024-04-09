<script>
    import { onMount } from 'svelte';   
    import config from '../../config.ts';
    import page from './data.ts'

</script>

<!-- Watermak -->
<div class="absolute z-10 top-0 xs:top-2 xl:bottom-2 xl:top-auto text-white w-full flex items-center justify-center gap-2 text-sm opacity-50">
    Made with 🐱 by 
    <a href="https://github.com/IMXNOOBX" target="_blank" rel="noopener noreferrer" class="font-semibold">@imxnoobx</a>
</div>


<!-- Main content -->
<main class="text-white md:flex flex-col p-5 xs:p-10 md:px-32 md:py-20 xl:p-40 h-full w-full items-center justify-center gap-4 overflow-x-hidden">
    <h1 class="text-4xl md:text-6xl font-bold text-center">{page.title}</h1>
    <p class="text-zinc-400 text-center text-sm my-2 md:text-base">{page.description.replaceAll('{bot_name}', config.name)}</p>
    <div class="bg-zinc-800/50 border border-zinc-800 p-4 rounded-xl backdrop-blur-sm">
        {#each page.sections as section}
            <h2 class="text-base font-semibold">{section.title}</h2>
            <p class="text-zinc-500 pl-2">{section.content}</p>
        {/each}
    </div>
    <div class="w-full mt-4 flex items-center justify-center">
        <a class="bg-zinc-700/50 py-1 px-2 border border-zinc-700 rounded-md z-10" href="/">Go Back</a>
    </div>
</main>
