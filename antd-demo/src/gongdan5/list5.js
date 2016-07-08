import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Select, Checkbox, Radio,DatePicker,formItemLayout, Upload, 
	 Cascader ,Button, Icon} from 'antd';
import "./new_file.css";
const FormItem = Form.Item;
const Option = Select.Option;
function handleSelectChange(value) {
  console.log(`selected ${value}`);
}
const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];
const props = {
  action: '/upload.do',
  listType: 'picture',
  defaultFileList: [{
    uid: -1,
    status: 'done',
    url: 'cctv1.png',
    thumbUrl: 'cctv1.png',
  }]
};
const props2 = {
  action: '/upload.do',
  listType: 'picture',
  defaultFileList: [{
    uid: -1,
    status: 'done',
    url: 'cctv1.png',
    thumbUrl: 'cctv1.png',
  },{
  	uid: -2,
    status: 'done',
    url: 'cctv1.png',
    thumbUrl: 'cctv1.png',
  }]
};
function onChange1(value) {
  console.log(value);
}
const Demo=React.createClass({
	render(){
		return(
			<div className="total">
				<div className="left">
					<Form horizontal >
					    
				    	<FormItem
					      id="control-input"
					      label="标题"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
				    	<FormItem
					      id="control-input"
					      label="副标题"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="关键词"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="别名"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="聚集总集数"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="聚集总时长"
					      labelCol={{ span: 7}}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
				          id="control-input"
				          label="播出日期"
				          labelCol={{ span: 7 }}
				          wrapperCol={{ span: 14 }}
				        >
				          <DatePicker onChange="{onChange}"/>
				      </FormItem>
				      <FormItem
				          id="control-input"
				          label="上映年份"
				          labelCol={{ span: 7 }}
				          wrapperCol={{ span: 14 }}
				        >
				          <DatePicker onChange="{onChange}"/>
				      </FormItem>
				      <FormItem
					      id="control-input"
					      label="演员"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="编剧"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="记者"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="受访者"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
				    </Form>
			    </div>
			    <div className="right">
			    	<Form horizontal>
			    		<div className="up-choice"> 
				    		<FormItem
						      labelCol={{ span: 7 }}
						      wrapperCol={{ span: 18 }}
						    >
						      <div className="fengmian">
						      	 <div className="upload1">
						      	 <Button type="ghost" className="choice1">
									        选择
									    </Button>
									    
									    <Upload {...props}>
									      <Button type="ghost" id="fengmianload">
									        本地上传
									      </Button>
									    </Upload>
									    
									    
									</div>
						      </div>
						    </FormItem>
					    </div>
					    <FormItem
				          id="control-input"
				          label="创建日期"
				          labelCol={{ span: 7 }}
				          wrapperCol={{ span: 14 }}
				        >
				          <DatePicker onChange="{onChange}"/>
				      </FormItem>
					    <FormItem
					      id="control-input"
					      label="节目类型"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="地区"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
			   			>
					      <Cascader options={options} onChange={onChange1} placeholder="请选择地区" />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="修改日期"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="导演"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
					    <FormItem
					      id="control-input"
					      label="主持人"
					      labelCol={{ span: 7 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input id="control-input" placeholder="Please enter..." />
					    </FormItem>
			    	</Form>
			    </div>
			    <div className="bottom">
			    	<Form horizontal className="form1">
			    		<FormItem
					      id="control-textarea"
					      label="电视剧简介"
					      labelCol={{ span: 3 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input type="textarea" id="control-textarea" rows="2" className="jianjie"/>
					    </FormItem>
					    <FormItem
					      id="control-textarea"
					      label="剧情简介"
					      labelCol={{ span: 3 }}
					      wrapperCol={{ span: 14 }}
					    >
					      <Input type="textarea" id="control-textarea" rows="3" className="jianjie"/>
					    </FormItem>
					    <FormItem
					      label="影视属性"
					      labelCol={{ span: 6 }}
					      wrapperCol={{ span: 18 }}
					    >
					      <Checkbox className="ant-checkbox-vertical"></Checkbox>
					    </FormItem>
					    <div className="up-choice1"> 
				    		<FormItem
				    		  label="海报"	
						      labelCol={{ span: 3 }}
						      wrapperCol={{ span: 18 }}
						    >
						      <div className="haibao">
						      	 <div className="">
						      	 	<Button type="ghost" className="choice2">
									    选择
									</Button>
									    
									<Upload {...props2}>
									    <Button type="ghost" id="upload2">
									        上传
									    </Button>
									</Upload>
									    
									    
									</div>
						      </div>
						    </FormItem>
					    </div>
					    <div className="up-choice1"> 
				    		<FormItem
				    		  label="宣传片"	
						      labelCol={{ span: 3 }}
						      wrapperCol={{ span: 18 }}
						    >
						      <div className="haibao">
						      	 <div className="">
						      	 	<Button type="ghost" className="choice2">
									    选择
									</Button>
									    
									<Upload {...props2}>
									    <Button type="ghost" id="upload2">
									        上传
									    </Button>
									</Upload>
									    
									    
									</div>
						      </div>
						    </FormItem>
					    </div>
			    	</Form>
			    </div>
			</div>
		)
	}
})
ReactDOM.render(<Demo />,document.getElementById('root'));
export default Demo;


