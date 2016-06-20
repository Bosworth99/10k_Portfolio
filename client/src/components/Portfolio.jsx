
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Items from 'components/Items';
import styles from 'styles/styles.scss';

export default class Portfolio extends React.Component {

    constructor(props){
        super(props);
        this.state = {time :(new Date()).getTime()};
    }

    // componentDidMount(){
    //     console.log('Portfolio::fetch [before]');
    //
    //     let self = this;
    //     fetch('/api/portfolio')
    //         .then((res)=>{
    //             let items = res.get('items');
    //             console.log('Portfolio::fetch [success] %o', items);
    //             self.setState({
    //                 portfolio : items
    //             })
    //         })
    //         .catch((err)=>{
    //             console.log('Portfolio::fetch [fail]', err);
    //         });
    // }

    getProps(){
        console.log('this.props.portfolio %o', this.props.portfolio);
        return this.props.portfolio || [];
    }

    render(){
        return (
            <div className={styles.portfolio}>
                <h1 className={styles.title}>10k Portfolio</h1>
                <Items items={this.getProps()} />
            </div>
        )
    }
};
