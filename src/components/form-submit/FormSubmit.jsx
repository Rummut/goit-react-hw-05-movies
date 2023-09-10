import { Button, Input } from './FormSubmit.styled';

export const FormSubmit = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(event.target.elements.values.value);
        event.target.reset();
      }}
    >
      <Input name="values" required autoFocus placeholder="Search movie" />
      <Button type="submit">Search</Button>
    </form>
  );
};
