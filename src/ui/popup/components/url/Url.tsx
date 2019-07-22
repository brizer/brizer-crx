import React, { useState, useContext, useRef } from "react";
import { Table, Form, Input, Button } from "antd";

const UrlContext = React.createContext(null);

const UrlRow = ({ form, index, ...props }) => {
  return (
    <UrlContext.Provider value={form}>
      <tr {...props} />
    </UrlContext.Provider>
  );
};

const UrlFormRow = Form.create()(UrlRow);

class UrlCell extends React.Component {
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
      render: (text, record) => (
        <div>
          <a href="javascript:;">跳转</a>
          <a href="javascript:;" onClick={()=>handleDelete(record.key)}>删除</a>
        </div>
      )
    }
  ]);

  const components = {
    body: {
      row: UrlFormRow,
      cell: UrlCell
      //   cell: EditableCell
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

  function handleAdd() {
    const newData = {
      key: +new Date(),
      str: "被替换的字符串",
      toStr: "替换成的字符串"
    };
    setDataSource([...dataSource, newData]);
  }

  function handleDelete(key:number){
      setDataSource(dataSource.filter(item=>item.key!==key))
  }

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 10 }}>
        新增
      </Button>
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
