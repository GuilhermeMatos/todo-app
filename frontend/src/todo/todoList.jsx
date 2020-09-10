import React from "react";

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];

    list.map((todo) => {
      return (
        <tr>
          <td>{todo.description}</td>
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descricao</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};
