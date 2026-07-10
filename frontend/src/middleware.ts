import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((_context, _next) => {
  return Response.redirect("https://neocraft.arc360hub.com", 301);
});
