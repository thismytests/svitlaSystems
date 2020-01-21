export interface PlayersInfoProps {
  id: string,
  team_id: string,
  name: string,
  age: number,
  nationality: string,
  flag_url: string,
  position: string,
  history: [
    {
      team_id: string,
      apps: number,
      goals: number
    }
  ],
  value: number
}
