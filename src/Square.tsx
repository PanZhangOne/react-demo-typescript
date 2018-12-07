import * as React from 'react';

export interface ISquareProps {
    value: string;
    onClick(): void;
}


class Square extends React.Component<ISquareProps> {
    constructor(props: ISquareProps) {
        super(props);
    }


    public render() {
        return (
            <button className="square" onClick={this.props.onClick}>{this.props.value}</button>
        )
    }
}

export default Square;
