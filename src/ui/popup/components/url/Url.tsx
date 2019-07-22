import React, { useState, useContext } from "react";
import { Table, Form, Input } from "antd";

const UrlContext = React.createContext(null);

const UrlRow = ({ form, index, ...props }) => {
  console.log(form);
  return (
    <UrlContext.Provider value={form}>
      <tr {...props} />
    </UrlContext.Provider>
  );
};

const UrlFormRow = Form.create()(UrlRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave }: any = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title }: any = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };
  input: any;
  form: any;

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    }: any = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <UrlContext.Consumer>{this.renderCell}</UrlContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

const UrlCell = props => {
  const [state, setState] = useState({
    editing: false
  });
  let form;
  let input;

  const {
    editable,
    dataIndex,
    title,
    record,
    index,
    handleSave,
    children,
    ...restProps
  } = props;

  function toggleEdit() {
    const editing = !state.editing;
    if (editing) {
      setState({
        editing: input.focus()
      });
    }
  }

  function save(e) {
    const { record, handleSave } = props;
    form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  const renderCell = renderForm => {
    form = renderForm;
    const { children, dataIndex, record, title } = props;
    const editing = state.editing;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {renderForm.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (input = node)}
            onPressEnter={save}
            onBlur={save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  };
  return (
    <td {...restProps}>
      {editable ? (
        <UrlContext.Consumer>{renderCell}</UrlContext.Consumer>
      ) : (
        children
      )}
    </td>
  );
};

const Url = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: 0,
      str: "localhost:8080",
      toStr: "http://www.baidu.com"
    },
    {
      key: 1,
      str: "localhost:8081",
      toStr: "http://www.google.com"
    }
  ]);

  let [columns, setColumns] = useState([
    {
      title: "替换项",
      dataIndex: "str",
      width: "40%",
      editable: true
    },
    {
      title: "被替换项",
      dataIndex: "toStr",
      width: "40%",
      editable: true
    },
    {
      title: "操作",
      dataIndex: "operation",
      render: (text, record) => <a href="javascript:'">跳转</a>
    }
  ]);

  const components = {
    body: {
      row: UrlFormRow,
      //   cell: UrlCell
      cell: EditableCell
    }
  };

  columns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave
      })
    };
  });

  function handleSave(row) {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    setDataSource(newData);
  }

  return (
    <div>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};
export default Url;
