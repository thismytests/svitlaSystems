export interface Item {
  "id": string,
  "date"?: Date,
  "team_one_id"?: string,
  "team_one_goals"?: number,
  "team_two_goals"?: number
}

export interface GamesAPI {
  success: true,
  data: Array<Item>
}
