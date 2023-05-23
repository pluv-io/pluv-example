import { createPluvHandler } from "@pluv/platform-cloudflare";
import { io } from "./pluv-io";

const Pluv = createPluvHandler({
    binding: "rooms",
    endpoint: "/api/pluv",
    io,
});

export const RoomDurableObject = Pluv.DurableObject;

export default Pluv.handler;
