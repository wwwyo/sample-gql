import { teams } from "../mock/teams";

export class TeamService {
  teams: typeof teams;

  constructor() {
    this.teams = teams;
  }

  findAll() {
    return this.teams;
  }

  findById(id: string) {
    return this.teams.find((team) => team.id === id);
  }

  add(team: typeof teams[0]) {
    const newTeam = { ...team, id: new Date().toISOString() };
    this.teams = [...this.teams, newTeam];
  }
}
