const initialState = {
    agility: 1,
    attack: 1,
    construction: 1,
    cooking: 1,
    crafting: 1,
    defence: 1,
    farming: 1,
    firemaking: 1,
    fishing: 1,
    fletching: 1,
    herblore: 1,
    hitpoints: 1,
    hunter: 1,
    magic: 1,
    mining: 1,
    prayer: 1,
    ranged: 1,
    slayer: 1,
    smithing: 1,
    strength: 1,
    thieving: 1,
    woodcutting: 1,
}


const skills = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_SKILL':
            let skill = action.skill.toLowerCase();
            // Return state
            return Object.assign({
                [skill]: state[skill] + action.amount
            }, state);
        default:
            return state;
    }
};

export default skills;
