import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Items from '/components/Portfolio/Items.jsx';
import styles from '/styles.scss';

// the Presentational Component
// export default class Portfolio extends React.Component {
//     render() {
//         console.log('Portfolio::render %o', this);
//         return (
//             <div className={styles.portfolio}>
//                 <h1 className={styles.title}>10k Portfolio</h1>
//                 {
//                     (this.props.loaded)
//                     ? <Items items={this.props.portfolio} />
//                     : <div>Loading...</div>
//                 }
//             </div>
//         );
//     }
// }

// Or - the pure functional way
// - only if the sole method is render()
export default function Portfolio(props) {
    console.log('Portfolio::render %o', props);
    return (
        <div className={styles.portfolio}>
            <h1 className={styles.title}>10k Portfolio</h1>
            {
                (props.loaded)
                ? <Items items={props.portfolio} />
                : <div>Loading...</div>
            }
        </div>
    );
}
