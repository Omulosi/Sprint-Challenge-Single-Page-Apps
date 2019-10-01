import React from "react";
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

const StyledSearchForm = styled.section`
  padding: 4px;
  position: absolute;
  top: 6.5em;
  right: 5em;
`

export default function SearchForm(props) {

  return (
    <StyledSearchForm>
      <Formik
        initialValues={{query: ''}}
        onSubmit={(values, { resetForm }) => {
          props.onSubmit(values.query);
          resetForm();
        }}
        render={props => {
          return (
            <Form>
              <Field name='query' type='text' placeholder='Search' />
            </Form>
          )
        }}
      />
    </StyledSearchForm>
  );
}
