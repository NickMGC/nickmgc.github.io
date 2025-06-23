const currentScript = document.querySelector('script[src$="head.js"]');

document.head.innerHTML = `
    <head>
        <base href='../'>
        <link rel='icon' href='assets/images/${currentScript.getAttribute('icon') || 'icon'}.png'>
        <link rel='stylesheet' href='backend/${currentScript.getAttribute('stylesheet') || 'site'}.css'>
        <title>${currentScript.getAttribute('title') || 'Untitled Page'}</title>
    </head>
`;

currentScript.remove();