interface Item {
  "id": string,
  "name": string,
  "city": string,
  "logo_url": string,
  "founded": number,
  "colour": string,
  "budget": number
}

export interface TeamsAPI {
  success: true,
  data: Array<Item>
}
