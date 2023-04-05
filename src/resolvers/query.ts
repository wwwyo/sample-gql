import { TeamService } from "service/TeamService";
import { PlayerService } from "service/PlayerService";

export const query = {
  teams: () => {
    const teams = new TeamService().findAll();
    return teams.map((team) => ({
      ...team,
      players: new PlayerService().findByTeamId(team.id),
    }));
  },
};
