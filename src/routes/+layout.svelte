<script>
  import "../app.css";
  import config from "../config.ts";
</script>

<head>
    <title>{config.name}</title>
    <meta name="description" content="{config.short_description}">
</head>

<body class="h-screen bg-zinc-900">
  <div class="absolute h-full w-full"><div class="absolute h-full w-full bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div></div>
  <slot />
</body>