handlers.getHeroes = function (args, context) {
    playerTag = currentPlayerId;
    if (args && args.playerTag) {
        playerTag
    }
    
    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: ["heroes"]
    });

    const heroes = JSON.parse(playerData.Data["heroes"]["Value"])

    return {
        userHeroes: heroes,
        playerTag
    };
};