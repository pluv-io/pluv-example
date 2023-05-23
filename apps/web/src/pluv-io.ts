import type { io } from "server-cloudflare/pluv-io";
import { createBundle, createClient, y } from "@pluv/react";
import { z } from "zod";

const client = createClient<typeof io>({
    wsEndpoint: (room) => {
        return `ws://127.0.0.1:3001/api/pluv/room/${room}`;
    },
});

export const {
    // factories
    createRoomBundle,

    // components
    PluvProvider,

    // hooks
    usePluvClient,
} = createBundle(client);

export const {
    // components
    MockedRoomProvider,
    PluvRoomProvider,

    // hooks
    usePluvBroadcast,
    usePluvConnection,
    usePluvEvent,
    usePluvMyPresence,
    usePluvMyself,
    usePluvOther,
    usePluvOthers,
    usePluvRoom,
    usePluvStorage,
} = createRoomBundle({
    presence: z.object({
        color: z
            .string()
            .refine((value) => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)),
    }),
    initialStorage: () => ({
        messages: y.array<{ color: string; message: string }>([]),
    }),
});
