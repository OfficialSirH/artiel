// eslint-disable-next-line spaced-comment
/// <reference lib="ESNext" />

import { writeFile } from 'node:fs/promises';
import { fetchEntry, fetchLatest, outputFile, type Comic } from './shared/xkcd.mjs';

const last = await fetchLatest();
if (last === null) process.exit(1);

const lastId = last.id;
const output = [] as Comic[];
for (let i = 1; i < lastId; i++) {
	if (i === 404) continue;

	const entry = await fetchEntry(i);
	if (entry === null) continue;

	output.push(entry);
	process.stdout.write(`\rWritten ${i} out of ${lastId} (${Math.round((i / lastId) * 100)}%)`);
}

output.push(last);
process.stdout.write(`\rWritten ${lastId} out of ${lastId} (100%)`);

await writeFile(outputFile, JSON.stringify(output, undefined, '\t'), 'utf8');
