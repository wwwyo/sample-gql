import { players } from "../mock/players";

export class PlayerService {
  players: typeof players;

  constructor() {
    this.players = players;
  }

  findAll() {
    return this.players;
  }

  findByTeamId(teamId: string) {
    return this.players.filter((player) => player.teamId === teamId);
  }

  add(player: typeof players[0]) {
    const newPlayer = { ...player, id: new Date().toISOString() };
    this.players = [...this.players, newPlayer];
  }
}
