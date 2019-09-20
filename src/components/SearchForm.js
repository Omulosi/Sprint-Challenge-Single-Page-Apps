import React from "react";
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

const StyledSearchForm = styled.section`
  padding: 4px;
`

export default function SearchForm(props) {
 
  return (
    <StyledSearchForm>
      <Formik
        initialValues={{query: ''}}
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
