import React from "react";
import { Formik, Field, Form } from 'formik';

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
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
    </section>
  );
}
