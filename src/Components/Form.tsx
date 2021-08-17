import React from "react";

interface FormProps {
  formType?: string;
  nameId: string;
  occupationId: string;
  name: string;
  occupation: string;
  closeEdit?: () => void;
  submitFn(e: React.FormEvent<HTMLFormElement>): void;
  changeFn(e: React.ChangeEvent<HTMLInputElement>): void;
  blurFn(e: React.FocusEvent<HTMLInputElement>): void;
}

const Form = (props: FormProps) => {
  const handleCloseEdit = () => props.closeEdit?.();

  return (
    <form onSubmit={props.submitFn} autoComplete="off">
      <div className="form-group">
        <label htmlFor={props.nameId}>Name</label>
        <input
          type="text"
          name="name"
          value={props.name}
          id={props.nameId}
          className="form-control form-control-lg"
          onChange={props.changeFn}
          onBlur={props.blurFn}
        />
      </div>
      <div className="form-group">
        <label htmlFor={props.occupationId}>Occupation</label>
        <input
          type="text"
          name="occupation"
          value={props.occupation}
          id={props.occupationId}
          className="form-control form-control-lg"
          onChange={props.changeFn}
          onBlur={props.blurFn}
        />
      </div>
      {props.formType === "edit" ? (
        <div className="ctrl__btns">
          <span className="btn btn-secondary" onClick={handleCloseEdit}>
            Cancel
          </span>
          <input type="submit" className="btn btn-primary" value="Edit" />
        </div>
      ) : (
        <input type="submit" className="btn btn-success" value="Add" />
      )}
    </form>
  );
};

export default Form;
