import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.thecatapi.com/v1/images/search", () => {
    return HttpResponse.json([
      {
        id: "bb8",
        url: "https://cdn2.thecatapi.com/images/bb8.jpg",
        width: 500,
        height: 335,
      },
    ]);
  }),
];
