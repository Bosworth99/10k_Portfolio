

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


// original hardcoded data
const data = [
    {
        "id":"K10_01",
        "active" : "1",
        "title":"MyLNI",
        "context" : "Orca Software",
        "category" : "JS Application",
        "timeline" : "January,2015 - May, 2015",
        "description" :  "MyLNI represents the first major expansion of the Washington State Labor &amp; Industries eGovernment initiative."
    },{
        "id":"K10_02",
        "active" : "1",
        "title":"Secure Message Center",
        "context" : "Orca Software",
        "category" : "JS Application",
        "timeline" : "May, 2015 - Feb, 2016",
        "description" :  "SMC is a secure messaging client, connecting LNI staff to a substantial user base."
    },{
        "id":"K10_03",
        "active" : "1",
        "title":"Electronic Plan Submittal ",
        "context" : "Orca Software",
        "category" : "UX Prototype",
        "timeline" : "May, 2015",
        "description" :  "Prototype and mockup design."
    }
];

ReactDOM.render(
    <Portfolio portfolio={data} />,
    document.getElementById('app')
);
