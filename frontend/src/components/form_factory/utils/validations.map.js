/* eslint-disable consistent-return */
import * as Yup from 'yup';
import { isCPF } from '../yup-methods-validations/identity';
import { isValidDateExp } from '../yup-methods-validations/isValidDateExp';

Yup.addMethod(Yup.string, 'cpf', (message) => Yup.mixed().test('cpf', message, (value) => isCPF(value)));

Yup.addMethod(Yup.string, 'inputDateExp', (message) => Yup.mixed().test('isValidaDateExp', message, (value) => isValidDateExp(value)));

export const getValidationSchemaByName = (name) => {
  if (!Array.isArray(name)) {
    switch (name) {
      case 'inputRequired':
        return Yup.string()
          .required('Campo obrigatório');
      case 'emailRequired':
        return Yup.string()
          .email("Email inválido")
          .required('Campo é obrigatório');
      case 'passwordMinRequired':
        return Yup.string()
          .min(8, 'Mínimo de 8 caracteres')
          .required('Campo é obrigatório');
      case 'passwordWithMatches':
        return Yup.string()
          .required('Campo é obrigatório')
          .min(4, 'Mínimo 6 dígitos')
          .max(24, 'Máximo 24 dígitos');
        // .matches(/[0-9]/, I18n.get('ValidateOneNumber'))
        // .matches(/[a-zA-z]+/, I18n.get('ValidateOneLetter'))
        // .matches(/[a-z]/, I18n.get('ValidateOneLowerChar'))
        // .matches(/[A-Z]/, I18n.get('ValidateOneUpperChar'))
        // .matches(/[!@#$%*()_/\\\-+^&{}:;?.]/, I18n.get('ValidateOneSpecialChar'))
      case 'confirmPassword':
        return Yup.string().when('password', {
          is: (val) => val && val.length >= 6,
          then: Yup.string()
            .oneOf([Yup.ref('password')], 'Senhas não são iguais')
            .required('Campo é obrigatório'),
        });
      case 'inputIdentity':
        return Yup.string()
          .required('Campo é obrigatório')
          .cpf('CPF inválido')
      default: throw new Error(`Validation ${name} don't found`);
    }
  }
};
