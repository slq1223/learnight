import React from "react";
import ReactDOM from "react-dom";
import {DatePicker,Input,Button,Tree,Table} from 'antd';
import "./new_file.css";

const columns = [{
  title: '节目名称',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '时长',
  dataIndex: 'time',
}];
const data = [{
  key: '1',
  name: '芈月传第一集',
  time: '00:45:00',
}, {
  key: '2',
  name: '芈月传第二集',
  time: '00:45:00',
}];
const rowSelection = {
getCheckboxProps: record => ({
    disabled: record.name === '',    // 配置无法勾选的列
}),
};
const TreeNode = Tree.TreeNode;
const DateRange = React.createClass({
   getInitialState() {
	    return {
	      startValue: null,
	      endValue: null,
	      endOpen: false,
	    };
    },
    getInitialState() {
	    const keys = this.props.keys;
	    return {
	      defaultExpandedKeys: keys,
	      defaultSelectedKeys: keys,
	      defaultCheckedKeys: keys,
	    };
  	},
  	onSelect(info) {
    	console.log('selected', info);
    },
    onCheck(info) {
    	console.log('onCheck', info);
    },
	getDefaultProps() {
	    return {
	      keys: ['0-0-0', '0-0-1','0-0-2'],
	    };
	},
    disabledStartDate(startValue) {
	    if (!startValue || !this.state.endValue) {
	      return false;
	    }
	    return startValue.getTime() >= this.state.endValue.getTime();
    },
 	disabledEndDate(endValue) {
	    if (!endValue || !this.state.startValue) {
	      return false;
	    }
	    return endValue.getTime() <= this.state.startValue.getTime();
  },
    onChange(field, value) {
	    console.log(field, 'change', value);
	    this.setState({
	      [field]: value,
	    });
    },
    onStartChange(value) {
    	this.onChange('startValue', value);
    },
  	onEndChange(value) {
    	this.onChange('endValue', value);
  	},
    handleStartToggle({ open }) {
	    if (!open) {
	      this.setState({ endOpen: true });
	    }
    },
    handleEndToggle({ open }) {
    	this.setState({ endOpen: open });
    },
    componentDidMount() {
    this.getMock();
  },
  getMock() {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i,
        title: `内容${i + 1}`,
        description: `内容${i + 1}的描述`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  },
  handleChange(targetKeys, direction, moveKeys) {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  },
  renderItem(item) {
    const customLabel = (
      <div className="custom-item">
        {item.title} - {item.description} <Icon type="android" />
      </div>
    );

    return {
      label: customLabel,  // for displayed item
      value: item.title,   // for title and filter matching
    };
  },
  	render() {
	    return (
	      <div >
		      <div className="date fl">
		        <DatePicker
		          className="time" 
		          disabledDate={this.disabledStartDate}
		          showTime
		          format="yyyy-MM-dd HH:mm:ss"
		          value={this.state.startValue}
		          placeholder="开始日期"
		          onChange={this.onStartChange}
		          toggleOpen={this.handleStartToggle}
		        /> 至 
		         <DatePicker
		          disabledDate={this.disabledEndDate}
		          showTime
		          format="yyyy-MM-dd HH:mm:ss"
		          value={this.state.endValue}
		          placeholder="结束日期"
		          onChange={this.onEndChange}
		          open={this.state.endOpen}
		          toggleOpen={this.handleEndToggle}
		        />
		         <div className="fr searchname">
		         	<Input type="text" placeholder="输入视屏名称" className="name"/>
		         	<Button className="search">搜索</Button>
		         </div>
		         
		        <div className="show">
		        <div className="fl chengpin" >
			         	<Tree className="myCls" showLine multiple checkable
					        defaultExpandedKeys={this.state.defaultExpandedKeys}
					        defaultSelectedKeys={this.state.defaultSelectedKeys}
					        defaultCheckedKeys={this.state.defaultCheckedKeys}
					        onSelect={this.onSelect} onCheck={this.onCheck}>
					        <TreeNode title="成品区" key="0-0">
					            <TreeNode title="节目" key="0-0-1">
						            <TreeNode title={<span >体育</span>} key="0-0-1-0" />
						            <TreeNode title={<span >新闻</span>} key="0-0-1-1" />				            
					            </TreeNode>
					        </TreeNode>
			      		</Tree>
		        </div>
		        <div className="fr jiemu">
            	<Table className="table4" rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
		        
		        </div>
		        
            <div className="addButton">
            	<input type="button" value=">"></input>
            	<input type="button" value="<"></input>
            	<input type="button" value=">>"></input>
            	<input type="button" value="<<"></input>
            </div>
            
		      </div>
		    
	        <div className="add">
	        	<div className="list">
	        		<h3>节目列表</h3>
	        		<ul>
	        		<li>芈月传第一集</li>
	        		<li>芈月传第二集</li>
	        		<li>芈月传第三集</li>
	        		<li>芈月传第一集</li>
	        		<li>芈月传第二集</li>
	        		<li>芈月传第三集</li>
	        		<li>芈月传第一集</li>
	        		<li>芈月传第二集</li>
	        		<li>芈月传第三集</li>
	        	</ul>
	        	</div>
	        	
	        </div>
	    </div>
	    );
  	},
});
ReactDOM.render(<DateRange />, document.getElementById('root'));

export default DateRange;




























