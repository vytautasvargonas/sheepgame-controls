export default (state, action) => {
    switch (action.type) {
        case 'playerProfile':
        return {
            ...state,
            health: action.health,
            money: action.money,
            grass: action.grass,
            crowns: action.crowns,
            priceGrass: action.priceGrass,
            priceSheep: action.priceSheep,
            priceSmash: action.priceSmash,
            priceUpgrade1: action.priceUpgrade1,
            priceUpgrade2: action.priceUpgrade2
        };
        case 'upgradeData':
        return {
            upgradeDisplayName: action.upgrade.upgradeDisplayName,
            upgradeDescription: action.upgrade.upgradeDescription,
            priceUpgrade: action.upgrade.priceUpgrade,

            sheepTypeInput: action.upgrade.sheepTypeInput,
            sheepTypeOutput: action.upgrade.sheepTypeOutput
        }
        default:
            return state;
    }
};