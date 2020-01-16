interface Item {
    "id": string,
    "name": string,
    "city": string,
    "logo_url": string,
    "founded": number,
    "colour": string,
    "budget": number
}

interface APi {
    "success": true,
    "data": Array<Item>
}
