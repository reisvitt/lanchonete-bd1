/* eslint-disable react/prop-types, max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import CallInputs from './call_inputs';
import { getInitialValues, getValidationSchema } from './utils/util';
import { Heading } from '../ui/components';
import { Col, Row } from '../ui/layout';

function FormFactory({ data, onSubmit, children }) {
  const validationSchema = getValidationSchema(data);
  const initialValues = getInitialValues(data);

  const options = {
    enableReinitialize: true,
    initialValues,
    onSubmit,
  };

  if (validationSchema) Object.assign(options, { validationSchema });

  return (
    <Formik {...options}>
      {(actions) => (
        <Form>
          {children || data.map(({
            name, component: Component, items,
          }, idx) => (
            <>
              {name && name !== 'Faça seu cadastro' && !Component && <Heading>{name}</Heading>}
              {name && name !== 'Faça seu cadastro' && Component && <Component>{name}</Component>}
              <Row>
                {items.filter((item) => item.component).map(({ col, ...item }, index) => {
                  if (item?.baseToShow !== undefined) {
                    if (item.baseToShow === 'mission') {
                      if (item.show.find((show) => actions.values[item?.baseToShow]?.includes(show))) {
                        return (
                          <Col w={col || '100%'} key={`${idx}-${index}`} mb={item.mb || 15} mt={item.mt}>
                            <CallInputs {...item} {...actions} />
                          </Col>
                        );
                      }
                    }
                    if (item.show.includes(actions.values[item?.baseToShow])) {
                      return (
                        <Col w={col || '100%'} key={`${idx}-${index}`} mb={item.mb || 15} mt={item.mt}>
                          <CallInputs {...item} {...actions} />
                        </Col>
                      );
                    }
                    return null;
                  }
                  return (
                    <Col w={col || '100%'} key={`${idx}-${index}`} mb={item.mb || 15} mt={item.mt}>
                      <CallInputs {...item} {...actions} />
                    </Col>
                  );
                })}
              </Row>
            </>
          ))}
        </Form>
      )}
    </Formik>
  );
}

export const FormFactoryParams = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  items: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
      col: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
      ]),
      placeholder: PropTypes.string,
      isRequired: PropTypes.bool,
      tabIndex: PropTypes.number,
      mask: PropTypes.string,
      submittingText: PropTypes.string,
      validations: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
      withDisable: PropTypes.bool,
    }),
  ])).isRequired,
}));

FormFactory.propTypes = {
  data: FormFactoryParams.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormFactory;
