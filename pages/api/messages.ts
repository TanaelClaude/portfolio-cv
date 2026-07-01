import { promises as fs } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const DATA_PATH = path.join(process.cwd(), "app", "contact-form", "messages.json");

async function readMessages() {
  try {
    const content = await fs.readFile(DATA_PATH, "utf8");
    return JSON.parse(content || "[]");
  } catch (err: any) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

async function writeMessages(messages: any[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(messages, null, 2), "utf8");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const messages = await readMessages();
      return res.status(200).json(messages);
    } catch (err) {
      return res.status(500).json({ error: "Failed to read messages" });
    }
  }

  if (req.method === "POST") {
    const { name, email, message } = req.body ?? {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      const messages = await readMessages();
      const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString(),
      };
      messages.unshift(newMessage);
      await writeMessages(messages);
      return res.status(201).json(newMessage);
    } catch (err) {
      return res.status(500).json({ error: "Failed to save message" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
