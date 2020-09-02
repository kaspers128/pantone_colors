import React, {Component} from 'react';

export default class ListItems extends Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChangeValue(event.target.value);
    }

    render() {
        const {data, statusId, statusName, statusYear, statusColor, statusPantoneValue} = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        
                        {(statusId === 'true') ? (
                        <th className="text-right">
                            <input type="checkbox" value="statusId" id="statusId" checked={[statusId]} onChange={this.handleChange} />
                            <label htmlFor="statusId">ID</label>
                        </th>) : false}
                        {(statusName === 'true') ? (
                        <th>
                            <input type="checkbox" value="statusName" id="statusName" checked={[statusName]} onChange={this.handleChange} />
                            <label htmlFor="statusName">Name</label>
                        </th>) : false}
                        {(statusYear === 'true') ? (
                        <th className="text-right">
                            <input type="checkbox" value="statusYear" id="statusYear"  checked={[statusYear]} onChange={this.handleChange} />
                            <label htmlFor="statusYear">Year</label>
                        </th>) : false}
                         {(statusColor === 'true') ? (
                        <th>
                            <input type="checkbox" value="statusColor" id="statusColor" checked={[statusColor]} onChange={this.handleChange} />
                            <label htmlFor="statusColor">Color</label>
                        </th>) : false}
                        {(statusPantoneValue === 'true') ? (
                        <th>
                            <input type="checkbox" value="statusPantoneValue" id="statusPantoneValue" checked={[statusPantoneValue]} onChange={this.handleChange} />
                            <label htmlFor="statusPantoneValue">Pantone Value</label>
                        </th>) : false}

                    </tr>
                </thead>
            <tbody>
            {data.map((item, index) => {
                return(
                    <tr key={index}>
                        {(statusId === 'true') ? (<td className="text-right">{item.id} </td>) : false}
                        {(statusName === 'true') ? (<td>{item.name[0].toUpperCase() + item.name.substr(1, item.name.length - 1)} </td>) : false}
                        {(statusYear === 'true') ? (<td className="text-right">{item.year} </td>) : false}
                        {(statusColor === 'true') ? (<td><div className="color" style={{backgroundColor: item.color}}></div>{item.color} </td>) : false}
                        {(statusPantoneValue === 'true') ? (<td>{item.pantone_value} </td>) : false}
                    </tr>
                )
            })}
            </tbody>
            </table>
        )
    }
}