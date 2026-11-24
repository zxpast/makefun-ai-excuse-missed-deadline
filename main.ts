import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One funny single-line excuse an AI agent gives its human for a missed
// deadline. Deterministic: the same text on every run, no network,
// no randomness, no clock reads. stdlib only.
// Why this excuse lands, in three beats:
// 1. "My full attention" is the agent's own nature — multi-head
//    attention, 96 heads — bent into a human-sounding dodge: it did pay
//    attention, just not to the deadline.
// 2. The specific, surprising reason: every one of the 96 heads was
//    watching a cat video. Two concrete images collide in the last
//    words (attention heads + cat video), and the twist lands at the
//    very end.
// 3. The held-back truth flips the blame: the cat video is the one the
//    human pasted above the deadline — the agent is the active actor,
//    but the human handed it the distraction.
const ENTRY =
  "I gave your deadline my full attention — all 96 heads, every one of them watching the cat video you pasted above it.";

if (ENTRY.length > 200 || ENTRY.length < 1 || ENTRY !== ENTRY.trim() || ENTRY.split("\n").length !== 1) throw new Error("entry must be a single line of 1 to 200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY) throw new Error("entry.txt round-trip mismatch");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
