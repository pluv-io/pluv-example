/** @type {import("drizzle-kit").Config} */
const config = {
    schema: "./src/schema.ts",
    out: "./drizzle",
    connectionString:
        "./.wrangler/state/v3/d1/b7a7bdb4-7514-4d35-9992-4e0928194ee9/db.sqlite",
};

export default config;
