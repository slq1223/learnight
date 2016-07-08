import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'antd';
import "./list1.css";
const columns = [{
  title: '剧集',
  dataIndex: 'episode',
  render:(text)=>(
  	<span className="spantt">
  		<img src="cctv1.png"/>
  		<span >{text}</span>
  	</span>
  )
}, {
  title: '当前集数',
  dataIndex: 'currentnumber',
}, {
  title: '总集数',
  dataIndex: 'sum',
},{
	title:'时长',
	dataIndex:'duration',
},{
	title:'状态',
	dataIndex:'state'
},{
	title:'提交',
	dateIndex:'submit'
},{
	title:'创建时间',
	dataIndex:'time',
},{
	title:'操作',
	dataIndex:'operate',
	render:(text) =>(
    	<span>
    		<a href="#">预览</a>
    		<span className="ant-divider"></span>
    		<a href="#">编辑</a>
    		<span className="ant-divider"></span>
    		<a href="#">推送</a>
    		<span className="ant-divider"></span>
    		<a href="#">删除</a>
    		<span className="ant-divider"></span>
    	</span>
    )
}];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    episode:'琅琊榜',
    currentnumber: '20',
    sum: '60',
    duration:'20:45:00',
    state:'新建',
    submit:'army',
    time:'2015-10-10 17:30:30',
     
  });
}
for (let i = 5; i < 50; i++) {
  data.push({
    key: i,
    episode: '芈月传',
    currentnumber: '20',
    sum: '63',
    duration:'20:45:00',
    state:'更新',
    submit:'army',
    time:'2015-10-20',
   
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
        <Table className="table1" rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  },
});
export default App;
