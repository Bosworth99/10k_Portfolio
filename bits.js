

// Table components example
// - had figured this out, but changed the markup in the app
export default class Items extends React.Component {
    getProps(){
        console.log('this.props.items', this.props.items);
        return this.props.items || [];
    }
    render (){
        return (
            <table>
                <tbody>
                    { this.getProps().map( (item, i)  =>
                        <Item item={item} key={i}  />
                    )}
                </tbody>
            </table>
        )
    }
};

export default class Item extends React.Component{
    render (){
        console.log('Item:render this.props.item:%o', this.props.item);
        if ( this.props.item.active ){
            let cells = Object.keys(this.props.item).map( (result, i) => {
                return (
                    <div className="item" key={i} >
                        <span>{this.props.item[result]}</span>
                    </div>
                )
            });
            return <tr>{cells}</tr>;
        } else {
            return <td style="padding:20x; color:red"> not active </td>
        }
    }
};

// request data from within component
componentDidMount(){
    console.log('Portfolio::fetch [before]');

    let self = this;
    fetch('/api/portfolio')
        .then((res)=>{
            let items = res.get('items');
            console.log('Portfolio::fetch [success] %o', items);
            self.setState({
                portfolio : items
            })
        })
        .catch((err)=>{
            console.log('Portfolio::fetch [fail]', err);
        });
}
