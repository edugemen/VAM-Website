/*
{
            color1: { backgroundColor: "#FF0000" },
        color2: { backgroundColor: "#0000FF" },
        team1: "Team 1",
        team2: "Team 2",
        sets1: 0,
        sets2: 0,
        game1: 0,
        game2: 0,
        pointsOrder: [[]],
        serve: 0,
}
*/

export class Partido {
    constructor(
        color1,
        color2,
        team1,
        team2,
        sets1,
        sets2,
        game1,
        game2,
        pointsOrder,
        serve
    ) {
        this.color1 = color1;
        this.color2 = color2;
        this.team1 = team1;
        this.team2 = team2;
        this.sets1 = sets1;
        this.sets2 = sets2;
        this.game1 = game1;
        this.game2 = game2;
        this.pointsOrder = pointsOrder;
        this.serve = serve;
    }

    setTeam1(team1) {
        this.team1 = team1;
    }

    setTeam2(team2) {
        this.team2 = team2;
    }

    setColor1(color1) {
        this.color1 = color1;
    }

    setColor2(color2) {
        this.color2 = color2;
    }

    setSets1(sets1) {
        this.sets1 = sets1;
    }

    setSets2(sets2) {
        this.sets2 = sets2;
    }

    setGame1(game1) {
        this.game1 = game1;
    }

    setGame2(game2) {
        this.game2 = game2;
    }

    setPointsOrder(pointsOrder) {
        this.pointsOrder = pointsOrder;
    }

    setServe(serve) {
        this.serve = serve;
    }

    getTeam1() {
        return this.team1;
    }

    getTeam2() {
        return this.team2;
    }

    getColor1() {
        return this.color1;
    }

    getColor2() {
        return this.color2;
    }

    getSets1() {
        return this.sets1;
    }

    getSets2() {
        return this.sets2;
    }

    getGame1() {
        return this.game1;
    }

    getGame2() {
        return this.game2;
    }

    getPointsOrder() {
        return this.pointsOrder;
    }

    getServe() {
        return this.serve;
    }

    show() {
        console.log("Partido:", this.team1, this.team2, this.sets1, this.sets2);
    }
}
