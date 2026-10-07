import {multiply} from '../src/math.js';
import {user} from '../src/math.js';
import {users} from '../src/math.js';
import { isAdult } from '../src/math.js';

test('multiply retourne un produit',()=>{
  expect(multiply(4,5)).toBe(20);
})

it('informations user',()=>{

  expect(user).toEqual({
    name:'tresor',
    age:21
  })
})

test('utilisateur exist',()=>{
  expect(users).toContain('Alice')
})

describe(isAdult,()=>{
test('18 est considere comme age adulte',()=>{
 expect(isAdult(18)).toBe(true)
})

test('25 est considere comme age adulte',()=>{
 expect(isAdult(25)).toBe(true)
})

test('21 est considere comme age adulte',()=>{
 expect(isAdult(21)).toBe(true)
})
test('17 est considere comme age mineur',()=>{
 expect(isAdult(17)).toBe(false)
})
})



