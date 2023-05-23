import {
    integer,
    sqliteTable,
    text,
    uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const rooms = sqliteTable(
    "rooms",
    {
        id: integer("id").primaryKey({ autoIncrement: true }),
        name: text("name").notNull(),
        encodedStorage: text("encoded_storage"),
    },
    (table) => ({
        nameIdx: uniqueIndex("name_idx").on(table.name),
    })
);
