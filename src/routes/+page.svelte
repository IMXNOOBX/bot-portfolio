<script>
    import config from '../config.ts';

    let selected = true;
</script>

<main class="text-white flex flex-col lg:flex-row h-full w-full items-center justify-center gap-4">
    <!-- Bot Profile, similar to the discord one -->
     <div class="bg-slate-100/20 p-4 rounded-2xl backdrop-blur-[2px]">
        
        <!-- Bot card -->
        <div class="relative bg-zinc-800/50 rounded-xl border border-zinc-800 overflow-hidden max-w-md">
            <!-- profile picture and banner -->
            <div>
                <img 
                    src="/assets/banner.jpg" 
                    alt="banner" 
                    class="h-32 w-full object-cover" 
                >
                <img 
                    src="/assets/pfp.jpg" 
                    alt="avatar" 
                    class="absolute top-20 left-2 h-20 w-20 rounded-full border-4 border-zinc-800/80" 
                >
            </div>
            <!-- badges and invite -->
            <div class="mt-2 flex w-full">
                <div class="flex gap-1 bg-zinc-800/50 border border-zinc-800 rounded-md p-1 ml-24 items-center">
                    <img 
                        src="/assets/commands_badge.svg" 
                        alt="commands" 
                        title="Commands"
                        class="h-6 w-6 rounded-lg transition duration-300 hover:-skew-x-12" 
                    >
                    <img 
                        src="/assets/nitro_badge.png" 
                        alt="nitro" 
                        title="Nitro"
                        class="h-6 w-6 rounded-lg transition duration-300 hover:scale-105 hover:rotate-full" 
                    >
                    <img 
                        src="/assets/newuser_badge.svg" 
                        alt="newuser" 
                        title="New User"
                        class="h-6 w-6 rounded-lg transition duration-300 hover:animate-pulse" 
                    >
                </div>

                <div class="group/add ml-auto mr-2 bg-indigo-600/50 border border-indigo-600 rounded-lg px-1 flex items-center transition duration-300 hover:-rotate-90 hover:rounded-xl">
                    <img 
                        src="/assets/add.png" 
                        alt="add" 
                        title="Add bot to your server"
                        class="h-6 w-6 rounded-lg opacity-75 transition duration-300 group-hover/add:opacity-100 group-hover/add:rotate-180 cursor-pointer" 
                    >
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
                    <div>
                        <span class="text-mx font-extrabold">DESCRIPTION</span>
                        <p class="text-xs">{config.large_description}</p>
                    </div>
                </div>
            </div>
        </div>

     </div>


     <!-- Bot commands and their description -->
     <div class="bg-slate-700/20 p-4 rounded-2xl backdrop-blur-[2px]">
        <div class="flex">
            <h1 class="font-bold">Commands</h1>
            <div class="ml-auto">
                <select name="asd" id="wa" bind:value={selected} class="rounded-lg outline-none placeholder-gray-400 bg-zinc-600/50 border border-zinc-600">
                    <option class="bg-gray-800 text-gray-300" value={true}>slash</option>
                    <option class="bg-gray-800 text-gray-300" value={false}>chat</option>
                </select>
            </div>
        </div>
        <div class="flex flex-col mt-2 gap-2">
            {#each config.commands as command}
                <div class="flex gap-2 bg-zinc-800/40 border border-zinc-800 rounded-lg py-1 px-2 items-center">
                    <span class="bg-zinc-600/50 border border-zinc-600 rounded-lg px-1 text-xs">{command.type}</span>
                    <h2 class="font-bold">{selected ? '/' : '!'} {command.name}</h2>
                    <p>{command.description}</p>
                </div>
            {/each}
        </div>
     </div>
</main>
