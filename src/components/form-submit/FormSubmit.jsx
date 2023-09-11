import { Button, Input } from './FormSubmit.styled';

export const FormSubmit = ({ handleSubmit }) => {
  const SubmitForm = event => {
    event.preventDefault();
    handleSubmit(event.target.elements.values.value.trim());
    event.target.reset();
  };

  return (
    <form onSubmit={SubmitForm}>
      <Input name="values" required autoFocus placeholder="Search movie" />
      <Button type="submit">Search</Button>
    </form>
  );
};
