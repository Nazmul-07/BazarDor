import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const uri =
  process.env.DATABASE_URL ||
  "mongodb://localhost:27017/bazardor";

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 5000,
});

// Use explicit database name 'bazardor' if not provided in URI
const db = client.db("bazardor");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
    transaction: false, // Prevents transaction failures on standalone / non-replica set clusters
  }),
  emailAndPassword: {
    enabled: true,
  },
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "bazardor-secret-key-must-be-at-least-32-chars-long",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});
