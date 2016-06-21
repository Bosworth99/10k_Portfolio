import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Items from 'components/Items';
import styles from 'styles.scss';

// the Presentational Component
export default class Portfolio extends React.Component {
    render() {
        console.log('Portfolio::render %o', this.props);
        if (this.props.loaded){
            return (
                <div className={styles.portfolio} >
                    <h1 className={styles.title}>10k Portfolio</h1>
                    <Items items={this.props.portfolio} />
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

// Or - the pure functional way
// - only if the sole method is render()
// export default function Portfolio(props) {
//     console.log('Portfolio::render %o', props);
//     if (props.loaded){
//         return (
//           <div className={styles.portfolio}>
//             <h1 className={styles.title}>10k Portfolio</h1>
//             <Items items={props.portfolio} />
//           </div>
//         );
//     } else {
//         return <div>Loading...</div>;
//     }
// }
