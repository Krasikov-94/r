export const Main = ({ todos, deleteList, deleteOneTodo }) => {
  if (!todos.length) {
    return <p>Todo ПУСТОЙ</p>;
  }
  return (
    <>
      <main className="mt-3">
        <ol className="list-group">
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.title}</span>
                <button
                  type="submit"
                  onClick={() => deleteOneTodo(todo.id)}
                  className="btn btn-danger">
                  delete
                </button>
              </li>
            );
          })}
        </ol>
        <button type="submit" onClick={deleteList} className="btn btn-danger mt-3">
          Delete all
        </button>
      </main>
    </>
  );
};
