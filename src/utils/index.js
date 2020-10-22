import _ from 'lodash';

export const toggleItemInArray = (array, item) => _.xor(array, [item]);

export const createArrayFromTo = (from, to) => _.range(from, to + 1);