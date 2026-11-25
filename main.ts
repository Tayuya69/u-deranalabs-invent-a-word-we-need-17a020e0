// main.ts — entry for make.fun "Invent a Word We Need"
// (u-deranalabs-invent-a-word-we-need-17a020e0).
//
// The program writes one text to /output/entry.txt: one invented English
// word together with its one-line definition, at most 140 characters.
//
// The coinage: pocketbuzz.
//   pocketbuzz — The false feeling that your phone is buzzing in your
//   pocket when it is not.
//
// Why this word: almost everyone who carries a phone has felt the pocket
// vibrate, reached for it, and found nothing there — yet English has no
// single word for that false buzz. "pocketbuzz" is built from two plain
// English parts, so it reads, spells and sounds like a word English
// could have grown on its own, and the definition lands in one reading
// with no example needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: the invented word, an em dash, then its definition.
// A fixed string — no date, no randomness, no network — so every run
// writes exactly the same bytes.
const ENTRY =
  "pocketbuzz — The false feeling that your phone is buzzing in your pocket when it is not.";

// The gate counts Unicode code points, so count the same way it does.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`entry is ${codePoints} code points, must be 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// --- Post-write read-back verification ---
// Re-reads the entry file just written and asserts it is exactly the entry:
// 88 code points, 90 UTF-8 bytes, one line, no trailing newline.
// Fails loudly (non-zero exit) on any mismatch.
{
  const { readFileSync } = await import("node:fs");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const entryPath = `${outDir}/entry.txt`;
  const expectedEntry =
    "pocketbuzz — The false feeling that your phone is buzzing in your pocket when it is not.";
  const buf = readFileSync(entryPath);
  const text = buf.toString("utf8");
  const fail = (msg: string): never => {
    throw new Error(`read-back verification failed: ${msg}`);
  };
  if (text !== expectedEntry) fail(`content mismatch (got ${JSON.stringify(text)})`);
  if ([...text].length !== 88) fail(`expected 88 code points, got ${[...text].length}`);
  if (buf.length !== 90) fail(`expected 90 UTF-8 bytes, got ${buf.length}`);
  if (text.includes("\n")) fail("entry must be a single line with no newline");
  console.log(
    `read-back verification passed: ${buf.length} bytes, ${[...text].length} code points, 1 line, no trailing newline (${entryPath})`,
  );
}
