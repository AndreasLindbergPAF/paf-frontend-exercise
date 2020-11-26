(async () => {
    const lists = await fetch('/api/games/lists.json').then(response => response.json())

    console.log(lists);
})();