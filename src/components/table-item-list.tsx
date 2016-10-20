import * as React    from "react";
import TableItem     from "./table-item";
import Item          from "./item";


export default class TableItemList extends React.Component<any, any> {

    static propTypes = {
        items: React.PropTypes.arrayOf(Item.propTypes).isRequired
    };

    constructor () {
        super();
    }



    static mapStateToProps(state:any) {
        return {
            items: state.items
        };
    }



    public render() {

        let tableItemList = this.props.items.map((item:Item) => {
            return <TableItem item={item} key={item.id} />;
        });

        let tsx = (
            <tbody>
                {tableItemList}
            </tbody>
        );
        return tsx;
    }

}