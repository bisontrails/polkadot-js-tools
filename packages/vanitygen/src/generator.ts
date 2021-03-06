// Copyright 2017-2020 @polkadot/vanitygen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { GeneratorMatches, GeneratorResult, GeneratorOptions } from './types';

import generate from './generate';

export default function generator (options: GeneratorOptions): GeneratorResult {
  const { match, runs = 10, withCase = false } = options;
  const found: GeneratorMatches = [];
  const startAt = Date.now();
  const test = (withCase ? match : match.toLowerCase())
    .split(',')
    .map((c): string[] => c.split(''));

  while (found.length !== runs) {
    found.push(generate(test, options));
  }

  return {
    elapsed: Date.now() - startAt,
    found
  };
}
