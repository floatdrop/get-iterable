import test from 'ava';
import fn from './';

function * generator() {
	yield 1;
	yield 2;
	yield 3;
}

test('get iterable as a array', t => {
	t.same(fn([1, 2, 3]), [1, 2, 3]);
	t.same(fn(generator()), [1, 2, 3]);
	t.end();
});
