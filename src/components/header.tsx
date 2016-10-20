import * as React from "react";


export default class Header extends React.Component<any, any> {

    static propTypes = {
        headertext: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    };

    constructor() {
        super();

        // make sure that instances of this class refer to the correct
        // 'this' when calling the .handleChange() method by binding it to the
        // this from the current context.
        this.handleChange = this.handleChange.bind(this);
    }



    static mapStateToProps(state:any) {
        return {
            headertext: state.headertext
        };
    }



    static mapDispatchToProps(dispatch:any) {
        let action = {
            type: "CHANGE_HEADERTEXT",
            payload: "changed from Header.mapDispatchToProps()"
        };
        return {
            onChange: () => {
                    dispatch(action);
                }
        };
    }



    public handleChange(event:any) {
        console.log("...from Header.handleChange(). event.target = ", event.target);
        // (somehow set the source of this.props.title to the value of input)
    }



    public render() {
        let tsx = (
            <div>
                <p className="header">{this.props.headertext}</p>
                <input defaultValue="type here" onChange={this.props.onChange}/>
            </div>
        );
        return tsx;
    }

}



