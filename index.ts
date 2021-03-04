import { server } from "./server";

server.listen(process.env.SERVER_PORT, () => {
  console.log(`⚡️[server]: Server is running at ${process.env.SERVER_PORT}`);
});
