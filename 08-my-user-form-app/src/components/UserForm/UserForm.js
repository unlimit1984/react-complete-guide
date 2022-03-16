const UserForm = () => {
  const submutHandler = ($event) => {};

  return (
    <form onSubmit={submutHandler}>
      <h2>Username</h2>
      <input type="text" />

      <h2>Age (Years)</h2>
      <input type="text" />

      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
