handlers.getHeroes = function (args, context) {

    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: ["heroes"]
    });

    return playerData;
};