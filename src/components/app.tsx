import * as React  from "react";
import { connect } from "react-redux";
import Item        from "./item";
import Header      from "./header";
import Footer      from "./footer";
import Table       from "./table";


type AppProps = {
};

type AppState = {
};

export default class App extends React.Component<AppProps, AppState> {

    constructor() {
        super();
    }


    public render() {

        // Connected Component
        let ConnectedHeader = connect(
            Header.mapStateToProps,
            Header.mapDispatchToProps
        )(Header);

        let tsx = (
            <div>
                <ConnectedHeader />
                <Table />
                <Footer />
            </div>
        );
        return tsx;
    }
}


