import { TeamService } from "../service/TeamService";
import { PlayerService } from "../service/PlayerService";

export const query = {
  teams: () => {
    const teams = new TeamService().findAll();
    const results = teams.map((team) => ({
      ...team,
      players: new PlayerService().findByTeamId(team.id),
    }));
    console.log(results);
    return results;
  },
  team: (parent, args, context) => {
    const team = new TeamService().findById(args.id);
  },
};
