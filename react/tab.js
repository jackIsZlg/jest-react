import React, { PureComponent } from 'react';
// import S from './index.m.less';

export default class BackTop extends PureComponent {
    static defaultProps = {
        showTopScreenNum: 2,
    };

    state = {
        showTop: false, // 展示到顶部按钮
    };

    render() {
        const { showTop } = this.state;
        const { showTopScreenNum } = this.props;

        return (
            <div className="foo">
                <a>首页</a>
                1111111{showTopScreenNum}
                {
                    showTop && (
                        <div className="show">sajsakksan</div>
                    )
                }
            </div>
        );
    }
}
