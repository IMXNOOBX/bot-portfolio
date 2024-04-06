<script>
    import { onMount } from 'svelte';   
    import config from '../config.ts';

    let intro = false;
    let skip_intro = true;

    let slashcmd = true;
    let foundcmd = false;
    let pfp_focus = false;
    let hover_aknowledged = false;
    let chat_aknowledged = false;

    let input_text = '';
    
    let results = config.commands;

    $: chat_aknowledged = input_text.startsWith((slashcmd ? '/' : '!')) ? true : chat_aknowledged;
    $: hover_aknowledged = pfp_focus ? true : hover_aknowledged;
    $: foundcmd = results.length == 1 && results[0].name.toLowerCase() == input_text.slice(1).toLowerCase();

    $: results = config.commands.filter(command => {
        if (!input_text.startsWith((slashcmd ? '/' : '!')))
            return false;

        const prefix_command = (slashcmd ? '/' : '!') + command.name.toLowerCase();

        return prefix_command.includes(input_text.toLowerCase());
    });

    onMount(() => {
        skip_intro = localStorage.getItem('intro') == 'true';
    });
</script>

{#if !skip_intro}
    <div class="absolute z-10 w-full h-full backdrop-blur-lg transition delay-200 duration-700 {intro ? '-translate-y-full' : ''}">
        <button 
            on:click={() => {
                intro = true;
                localStorage.setItem('intro', intro.toString());
                setTimeout(() => {
                    skip_intro = true;
                }, 1000);
            }}
            class="flex flex-col w-full h-full bg-zinc-800/50 items-center justify-center animate-fade-in cursor-pointer"
            >
                <h1 class="text-6xl text-white transition duration-200 {intro ? '-translate-y-10' : ''}">{config.name}</h1>
                <h2 class="text-zinc-400 transition duration-300 {intro ? '-translate-y-10' : ''}">Welcome to my universe of emotes, explore my commands and learn about me</h2>
    
                <span class="text-zinc-600 text-sm mt-10 animate-pulse {intro ? 'opacity-0' : ''}">Click anywhere to continue</span>
        </button>
    </div>
{/if}

<!-- Watermak -->
<div class="absolute z-10 top-0 xs:top-2 xl:bottom-2 xl:top-auto text-white w-full flex items-center justify-center gap-2 text-sm opacity-50">
    Made with 🐱 by 
    <a href="https://github.com/IMXNOOBX" target="_blank" rel="noopener noreferrer" class="font-semibold">@imxnoobx</a>
</div>

<!-- Profile focus effect -->
<div class="absolute h-screen w-screen bg-zinc-900/70 transition duration-300 {pfp_focus ? "opacity-100 z-10" : "opacity-0"}"/>

<!-- Main content -->
<main class="text-white grid grid-flow-row p-5 xs:p-10 md:px-32 md:py-20 xl:p-40 xl:grid-flow-col xl:auto-rows-fr xl:grid-cols-3 h-full w-full items-center justify-center gap-4">
    <!-- Bot Profile, similar to the discord one -->
     <div 
        role="button"
        tabindex="0"
        on:mouseenter={() => pfp_focus = true}
        on:mouseleave={() => pfp_focus = false}
        class="group/pfp {skip_intro ? 'z-10' : ''} bg-zinc-700/20 border border-zinc-600/50 p-4 rounded-2xl backdrop-blur-[2px]">
        <!-- Bot card -->
        <div 
            class="relative bg-zinc-800 rounded-xl border border-zinc-800 overflow-hidden transition duration-300 xs:group-hover/pfp:scale-110 md:group-hover/pfp:scale-125 xl:group-hover/pfp:translate-x-20">
            <!-- profile picture and banner -->
            <div>
                <img 
                    src="/assets/banner.gif" 
                    alt="banner" 
                    class="h-32 w-full object-cover" 
                >
                <img 
                    src="/assets/pfp.gif" 
                    alt="avatar" 
                    class="absolute top-20 left-2 h-20 w-20 rounded-full border-4 border-zinc-800/80" 
                >
                {#if !hover_aknowledged}
                    <span 
                        class="absolute text-xs animate-pulse right-1 top-1 bg-zinc-700/50 border border-zinc-500 px-2 rounded-lg">
                        Hover Me!
                    </span>
                {/if}
            </div>
            <!-- badges and invite -->
            <div class="mt-2 flex w-full">
                <div class="flex gap-1 bg-zinc-800/50 border border-zinc-800 rounded-md p-1 ml-24 items-center">
                    <img 
                        src="/assets/commands_badge.svg" 
                        alt="commands" 
                        title="Slash commands supported"
                        class="h-6 w-6 rounded-lg transition duration-300 hover:-skew-x-12" 
                    >
                    <img 
                        src="/assets/nitro_badge.png" 
                        alt="nitro" 
                        title="Nitro related features"
                        class="h-6 w-6 rounded-lg transition duration-300 hover:scale-105 hover:rotate-full" 
                    >
                    <img 
                        src="/assets/newuser_badge.svg" 
                        alt="newuser" 
                        title="New to your server"
                        class="h-6 w-6 rounded-lg transition duration-300 hover:animate-pulse" 
                    >
                </div>

                <div class="group/add ml-auto mr-2 bg-indigo-600/50 border border-indigo-600 rounded-lg px-1 flex items-center transition duration-300 hover:-rotate-90 hover:rounded-xl">
                    <button
                        on:click={() => 
                            open(
                                config.invite, 
                                '_blank', 
                                `popup,width=500,height=600,left=${screen.width / 2 - 250},top=${screen.height / 2 - 300}`
                            )
                        }
                    >
                        <img 
                            src="/assets/add.svg" 
                            alt="add" 
                            title="Add me to your server"
                            class="h-6 w-6 rounded-lg opacity-75 transition duration-300 group-hover/add:opacity-100 group-hover/add:rotate-180 cursor-pointer" 
                        >
                    </button>
                </div>
            </div>
            <!-- bot name and description -->
            <div class="flex items-center bg-zinc-900/50 border border-zinc-900 gap-4 p-2 m-2 rounded-lg">
                <div>
                    <h1 class="text-lg font-bold">{config.name}</h1>
                    <div class="flex gap-1 items-center">
                        <h2 class="text-sm text-zinc-300">{config.tag}</h2>
                        <span class="px-1 bg-blue-500 text-ms rounded-xs">BOT</span>
                    </div>
                    <div class="mt-2">
                        <span class="text-mx font-extrabold">ABOUT ME</span>
                        <p class="text-xs">{config.short_description}</p>
                    </div>
                    <div class="group/tx">
                        <span class="text-mx font-extrabold">DESCRIPTION</span>
                        <p class="text-xs">{config.large_description}</p>
                    </div>
                </div>
            </div>
        </div>

     </div>


     <!-- Bot commands and their description --> 
     <div class="flex flex-col bg-zinc-600/20 border border-zinc-500/50 p-4 rounded-2xl backdrop-blur-[2px] h-full xl:col-span-2 min-h-96 overflow-hidden">
        <div class="flex">
            <h1 class="font-bold">Showcase</h1>
            <button class="ml-auto bg-zinc-800/50 border border-zinc-800 rounded-lg flex" on:click="{() => {slashcmd = !slashcmd}}">
                <div class="transition duration-300 border rounded-lg px-2 {slashcmd ? 'bg-zinc-600/50 border-zinc-600 -translate-x-2' : 'bg-zinc-600/0 border-zinc-600/0 translate-x-2 opacity-50'}">Slash</div>
                <div class="transition duration-300 border rounded-lg px-2 {!slashcmd ? 'bg-zinc-600/50 border-zinc-600 translate-x-2' : 'bg-zinc-600/0 border-zinc-600/0 -translate-x-2 opacity-50'}">Chat</div>
            </button>
        </div>

        <div class="mt-10">
            <div class="rounded-full bg-zinc-600 text-7xl px-4 w-min">
                #
            </div>

            <h1 class="mt-2 text-xl font-semibold">Welcome to #general!</h1>
            <h2 class="text-zinc-400 text-sm">Here you will be able to see all the commands available.</h2>
        </div>

        <!-- Chat -->
        <div class="mt-auto mb-4 px-2">
            <div class="flex gap-2">
                <img src="/assets/pfp.gif" alt="" class="w-12 h-12 rounded-full" />
                <div>
                    <h1 class="font-semibold">{config.name} <span class="text-zinc-400 text-xs">Today at {new Date().getHours()}:{new Date().getSeconds()}</span></h1>
                    <p>
                        Try the commands in your own discord server by 
                        <button 
                            on:click={() => open(config.invite, '_blank', )}
                            class="group inline-flex items-center transform duration-300 hover:translate-x-2 text-blue-400 font-semibold italic hover:underline">
                            Inviting Me 
                            <img src="/assets/arrow.svg" alt="" class="inline-flex fill-blue-400 h-4 w-4 ml-1 transform duration-300 group-hover:translate-x-5">
                        </button>
                    </p>
                    <p>
                        Tip, write <span class="text-zinc-400 font-semibold">{slashcmd ? '/' : '!'}</span> to see all the commands available
                    </p>
                    <p class="text-zinc-300">
                        Help me by upvoting me on these platforms:
                    </p>
                    {#each config.upvote as upvote}
                        <p class="pl-2">
                            - 
                            <button 
                                on:click={() => open(upvote.url, '_blank')}
                                class="group inline-flex items-center transform duration-300 hover:translate-x-2 text-blue-400 font-semibold italic hover:underline">
                                {upvote.name}
                                <img src="/assets/arrow.svg" alt="" class="inline-flex fill-blue-400 h-4 w-4 ml-1 transform duration-300 group-hover:translate-x-5">
                            </button>
                        </p>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Message bar -->
        <div class="">
            {#if !chat_aknowledged}
                <div class="absolute bg-zinc-700/50 border border-gray-500 rounded-md text-xs font-semibold px-2 animate-pulse bottom-12 left-20">
                    Write {slashcmd ? '/' : '!'} to see all the commands available
                </div>
            {/if}
            <div class="absolute bottom-14 left-2 w-[96%] bg-zinc-800 border border-zinc-700 py-1 px-2 mx-2 mb-2 rounded-xl overflow-auto max-h-60 {results.length == 0 || foundcmd ? 'hidden' : 'block'}">
                {#each results as command}
                    <button class="block w-full text-left hover:bg-zinc-700/50 focus:border outline-none rounded-lg px-1 select-none cursor-pointer" on:click={() => input_text = (slashcmd ? '/' : '!') + command.name}>
                        
                        <h1 class="font-semibold">
                            {(slashcmd ? '/' : '!')}{command.name}
                            <span class="bg-zinc-600/50 border border-zinc-600 rounded-lg px-1 text-xs">{command.type}</span>
                        </h1>
                        <p class="text-sm text-zinc-400">{command.description}</p>
                    </button>
                {/each}
            </div>
            <div class="w-full h-10 bg-zinc-600 border border-zinc-500 rounded-xl flex items-center justify-center gap-2 px-2">
                <img src="/assets/add.svg" alt="add" class="w-7 h-7 cursor-not-allowed">
                <input type="text" bind:value={input_text} placeholder="Message #general" class="bg-transparent outline-none w-full">
                <img src="/assets/send.svg" alt="add" class="w-7 h-7 ml-auto mb-1 -rotate-45 cursor-pointer">
            </div>
        </div>
     </div>
</main>
