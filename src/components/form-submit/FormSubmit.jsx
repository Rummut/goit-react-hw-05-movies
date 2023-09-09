export const FormSubmit = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(event.target.elements.values.value);
        event.target.reset();
      }}
    >
      <input name="values" required autoFocus placeholder="Search movie" />
      <button type="submit">Search</button>
    </form>
  );
};
