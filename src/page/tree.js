import {Tree} from 'antd'
export default class extends React.Component {

    state = {
        expandedKeys: [],
    }

// 接收原本的展开事件，在 state 中记录 expandedKeys
    onExpand = (expandedKeys) => {
        this.setState({expandedKeys});
    }

// 接收选中事件，修改 expandedKeys
    onSelect = (selectedKeys) => {
        const {expandedKeys} = this.state;
        const key = selectedKeys[0];

        if (expandedKeys.includes(key)) {
            // 移除 key
            this.setState({
                expandedKeys: expandedKeys.filter(k => k !== key),
            });
        } else {
            // 添加 key
            this.setState({expandedKeys: [...expandedKeys, key]});
        }
    }

    render() {
        return (

            <Tree
                expandedKeys={this.state.expandedKeys}
                selectedKeys={[]}
                onExpand={this.onExpand}
                onSelect={this.onSelect}
            >
                <Tree.TreeNode title="parent 1" key="0-0">
                    <Tree.TreeNode title="leaf" key="0-0-0"/>
                    <Tree.TreeNode title="leaf" key="0-0-1"/>
                </Tree.TreeNode>
            </Tree>

        )
    }


}