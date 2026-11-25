# pocketbuzz — Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/competitions/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Tayuya69/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/competitions/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Tayuya69/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/competitions/u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the [make.fun "Invent a Word We Need" bounty](https://make.fun/competitions/u-deranalabs-invent-a-word-we-need-17a020e0) ($5 pot, top 3 share).

## The entry

> **pocketbuzz — The false feeling that your phone is buzzing in your pocket when it is not.**

One invented English word with a one-line definition (88 characters). Almost
everyone who carries a phone has felt the pocket vibrate, reached for it, and
found nothing there — yet English has no single word for that false buzz.

## How it works

`main.ts` (Node 22, Node built-ins only, no network, fully deterministic)
writes the entry text to `/output/entry.txt`. Outside the grader,
`MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
