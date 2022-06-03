/* eslint-disable radix, no-mixed-operators */
const calculateIdentity = (str, weight) => {
  let sum = 0;

  for (let i = str.length - 1, digit; i >= 0; i--) {
    digit = parseInt(str.substring(i, i + 1));
    sum += digit * weight[weight.length - str.length + i];
  }

  sum = 11 - sum % 11;
  return sum > 9 ? 0 : sum;
};

const identityValidate = (str) => {
  const weight = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const identity = str.replace(/\D/g, '');

  if (identity == null || identity.length !== 11) return false;

  const digit1 = calculateIdentity(identity.substring(0, 9), weight);
  const digit2 = calculateIdentity(identity.substring(0, 9) + digit1, weight);

  return identity === identity.substring(0, 9) + digit1.toString() + digit2.toString();
};

const identityBlacklist = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '12345678909',
];

export const isCPF = (value = '') => {
  const sanitized = value.replace(/\D/g, '');
  if (!value) return true;
  if (identityBlacklist.includes(sanitized)) return false;
  return !!identityValidate(sanitized);
};
