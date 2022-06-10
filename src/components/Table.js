//{{
/*
import React, {Component} from 'react';
class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
*/
/////////////////////}}

//{{
/*
import React, {Component} from 'react';
class Table extends Component {
    render() {
      return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
      )
    }
  }

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>
	)
}

const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </tbody>
    )
}
*/
/////////////////////}}

//{{
/*
class Table extends Component {
    render() {
        const {characterData} = this.props

      return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} />
        </table>
      )
    }
  }
*/
/*
// import React, {Component} from 'react'
class Table extends Component {
  render() {
      const {characterData, removeCharacter} = this.props

    return (
      <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}
*/

// import React from 'react'
const TableHeader = () => {
	return (
		<thead className="Ex-thead app6">
			<tr className={`Ex-tr app6`}>
				<th className="Ex-th 1">Name</th>
				<th className="Ex-th 2">Job</th>
				<th className="Ex-th 3">Remove</th>
			</tr>
		</thead>
	);
};

const TableBody = (props) => {
	const rows = props.characterData.map((row, index) => {
		return (
			<tr className={`Ex-tr ${index}`} key={index}>
				<td className={`Ex-td ${index} 1`}>{row.name}</td>
				<td className={`Ex-td ${index} 2`}>{row.job}</td>
				<td className={`Ex-td ${index} 3`}>
					<button
						className={`Ex-button ${index}`}
						type="button"
						onClick={() => props.removeCharacter(index)}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	});

	return <tbody className="Ex-tbody app6">{rows}</tbody>;
};

const Table = (props) => {
	const { characterData, removeCharacter } = props;
	return (
		<table className="Ex-table ">
			<TableHeader />
			<TableBody
				characterData={characterData}
				removeCharacter={removeCharacter}
			/>
		</table>
	);
};
/////////////////////}}

export default Table;
