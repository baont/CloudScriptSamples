handlers.getHeroes = function (args, context) {
    playerTag = currentPlayerId;
    if (args && args.playerTag) {
        playerTag
    }
    
    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: ["heroes"]
    });

    const heroes = playerData.Data["heroes"]["data"];

    return {
        userHeroes: heroes,
        playerTag
    };
};