import React from 'react';
import Select from 'react-select';

export default class AuthorFilter extends React.Component {

  static defaultProps = {
    keyword: '',
    authors: [
      {
        value: 1,
        label: 'Paul'
      },
      {
        value: 2,
        label: 'John'
      },
      {
        value: 3,
        label: 'Aria'
      },
    ]
  };

  state = {
    authors: [],
    loading: true,
    inputValue: ''
  };

  componentDidMount = () => {
    this.getAuthors();
  };

  getAuthors = () => {
    setTimeout(() => {
      this.setState({
        authors: this.props.authors,
        loading: false
      });
    }, 500);
  };

  render = () => {
    const { inputValue, menuIsOpen } = this.state;
    return (
      <div>

        <Select
          isMulti
          defaultValue={this.state.authors[0]}
          isClearable
          isSearchable
          isLoading={this.state.loading}
          inputValue={inputValue}
          onInputChange={inVal => this.setState({ inputValue: inVal })}
          onChange={value => this.props.callback(value)}
          name="color"
          options={this.state.authors}
          menuIsOpen={menuIsOpen}
        />

      </div>
    );
  }
}
