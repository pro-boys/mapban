export const teams = [
    {
        "name": "Team 1",
    },
    {
        "name": "Team 2",
    },
];

export const getTeam = (team: boolean) =>  {
    const team1 = teams[0].name;
    const team2 = teams[1].name;

    if (team === true) {
        return team1;
    } else {
        return team2;
    }
}