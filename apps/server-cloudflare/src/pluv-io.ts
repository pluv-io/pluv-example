import { createIO } from "@pluv/io";
import { platformCloudflare } from "@pluv/platform-cloudflare";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export const io = createIO({
    getInitialStorage: async ({ env, room }) => {
        const db = drizzle(env.DB, { schema });

        const result = await db
            .select({
                encodedStorage: schema.rooms.encodedStorage,
            })
            .from(schema.rooms)
            .where(eq(schema.rooms.name, room))
            .get();

        return result?.encodedStorage ?? null;
    },
    onRoomDeleted: async ({ encodedState, env, room }) => {
        const db = drizzle(env.DB, { schema });

        await db
            .insert(schema.rooms)
            .values({
                name: room,
                encodedStorage: encodedState,
            })
            .onConflictDoUpdate({
                target: schema.rooms.name,
                set: { encodedStorage: encodedState },
            })
            .run();
    },
    platform: platformCloudflare<Env>(),
});
