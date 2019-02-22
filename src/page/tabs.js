import {Tabs} from 'antd'

export default class extends React.Component {
    render(){
        return(

            <React.Fragment>

                <Tabs>
                    <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
                </Tabs>
                {this.props.children}
            </React.Fragment>

        )

    }
}