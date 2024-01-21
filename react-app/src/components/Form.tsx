import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm, FormState } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  //   console.log(register);

  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: 0,
  //   });

  //   const handleSubmission = (event: FormEvent) => {
  //     event.preventDefault();
  //     // if (nameRef.current !== null) person.name = nameRef.current.value;
  //     // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);
  //   };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
              />
              {errors.name?.type==='required' && <p>The name field is required</p>}

        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />

        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
