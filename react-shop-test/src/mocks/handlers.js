import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "America",
          imagePath: "/images/america.jpeg",
        },
        {
          name: "England",
          imagePath: "/images/england.jpedg",
        },
      ])
    );
  }),
  rest.get("http://localhost:3030/options", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
    );
  }),
];
