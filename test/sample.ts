

import * as tape from 'tape';
import {ParseTree} from '../index'

const first = (name: string) => ParseTree.firstLetter(name);
const equals = (a: string, b: string) => a === b;

tape('Sample', (test: tape.Test) => {
  test.ok(equals('42', '42'));
  test.end();
});

tape('ParseTree', (test: tape.Test) => {
  test.ok(equals(first('gregore'), 'g'));
  test.ok(equals(first('lioninawhat'), 'l'));
  test.end();
});
