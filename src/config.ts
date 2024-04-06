export default {
    name: 'EmoteUniverse',
    tag: 'EmoteUniverse#9470',
    prefix: '/ or !',
    invite: 'https://discord.com/oauth2/authorize?client_id=1070301658946490451',
    support: 'https://discord.gg/m68Nfgyb4m',
    tags: ['emoji', 'emote', 'manager', 'utility'],
    short_description: 
        'Great and simple to use emote manager bot. I stand out for been reliable, efficient, and integrated with the latest discord features.',
    large_description: 
        'EmoteUniverse is an emoji manager bot that allows users to upload, manage, delete, and export custom emojis to create different emoji packs with ease. \
         The bot also provides functionalities to non nitro users as it will convert messages with non animated emojis into animated ones. \
         It also integrates the latest discord updates and now it can be used anywhere, such as in direct messages, group chats and even servers the bot is not in.',
    commands: [
        { name: 'help', type: 'slash/chat', description: 'Show the help embed with all comand list and their help description' },
        { name: 'invite', type: 'slash/chat', description: 'Generates an invite link for you to invite the bot or join the support server.' },
        { name: 'status', type: 'slash/chat', description: 'Collets information about the hosting and conection status to discords sockets.' },
        { name: 'add', type: 'slash/chat', description: 'Imports an external emoji to your server.' },
        { name: 'export', type: 'slash/chat', description: 'Feches all the emojis to export to another server.' },
        { name: 'import', type: 'slash/chat', description: 'Imports all the emogis from another server.' },
        { name: 'list', type: 'slash/chat', description: 'Displays a list of all current emojis.' },
        { name: 'remove', type: 'slash/chat', description: 'Removes an emoji from the server.' },
        { name: 'Add avatar as emoji', type: 'user', description: 'Creates an emoji from the users avatar' },
        { name: 'steal', type: 'any', description: 'Allows you to steal any emoji and copy it to your server with two simple clicks' },
    ],
    upvote: [
        { name: 'top.gg/emoteuniverse', url: 'https://top.gg/bot/1070301658946490451' },
        { name: 'discordbotlist.com/eu', url: 'https://discordbotlist.com/bots/emoteuniverse' },
        { name: 'discords.com/emoteuniverse', url: 'https://discords.com/bots/bot/1070301658946490451' },
    ]
};