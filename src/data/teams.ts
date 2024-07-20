export const teams = [
    {
        "name": "Team Chandran",
    },
    {
        "name": "Team Babu",
    },
    {
        "name": "Team Rayan",
    },
    {
        "name": "Team Sunimon",
    },
    {
        "name": "Team Kevin",
    },
];

export const getTeam = (team: boolean, team1: string | null, team2: string | null) =>  {
    if (team1 == null) {
        team1 = "Team 1";
    }

    if (team2 == null) {
        team2 = "Team 2";
    }

    if (team === true) {
        return team1;
    } else {
        return team2;
    }
}