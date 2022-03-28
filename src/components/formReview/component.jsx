import styles from "./styles.module.css";
import { Button } from '../button/component';
import React from 'react';
import { useState } from "react";

export const FormReview = ({onSubmit, defaultValues}) => {
    const [form, setForm] = useState({...defaultValues})

    const handleOnChange = (e) => setForm({...form, [e.target.name]: e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({...form})
        setForm(defaultValues)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input className={styles.formControl} value={form.name} name="name" onChange={handleOnChange}/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="review">Review</label>
        <input className={styles.formControl} value={form.text} type="text" name="text" onChange={handleOnChange} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="rate">Rate</label>
        <input className={styles.formControl} value={form.rating} type="number" name="rating" onChange={handleOnChange} />
      </div>ß
      <div className={styles.formGroup}>
        <Button type="submit" icon='submit' className={styles.button}>
          Submit
        </Button>
      </div>
    </form>
  );
}
export default FormReview
