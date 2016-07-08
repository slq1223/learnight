import React from "react";
import ReactDOM from "react-dom";
import { Table, Button,Pagination  } from 'antd';
import "./new_file.css";

const columns = [{
	title:'集号 表头排序',
	dataIndex:'number',
	render:(text)=>(
  		<span >{text}</span>
  )
},
{
  title: '文件名称',
  dataIndex: 'filename',
  render:(text)=>(
  	<span className="spantt">
  		<img src="cctv1.png"/>
  		<span >芈月传第一集</span>
  	</span>
  )
}, {
  title: '时长',
  dataIndex: 'time',
},
{
	title:'操作',
	dataIndex:'operate',
	render:(text) =>(
    	<span>
    		<a href="#">预览</a>
    		<span className="ant-divider"></span>
    		<a href="#">编辑</a>
    		<span className="ant-divider"></span>
    		<a href="#">删除</a>
    		<span className="ant-divider"></span>
    	</span>
    )
}];

const data = [];
for (let i = 0; i < 7; i++) {
  data.push({
    number: i,
    name:"芈月传第一集",
    filaname:'芈月传第一集',
    time:'17:30:30',
     
  });
}
const App = React.createClass({
  getInitialState() {
    return {
      selectedRowKeys: [],  // 这里配置默认勾选列
      loading: false,
    };
  },
  start() {
    this.setState({ loading: true });
    // 模拟 ajax 请求，完成后清空
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  },
  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  },
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Table className="table3" rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
    
  },
});
export default App;
