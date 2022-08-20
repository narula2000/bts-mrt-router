// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { stationRouter } from "./station";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("station.", stationRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
