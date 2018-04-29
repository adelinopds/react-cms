import React from 'react';
import Select from 'react-select';

export default class AuthorFilter extends React.Component {

  static defaultProps = {
    keyword: '',
    authors: [
      {
        id: 1,
        name: 'Paul'
      },
      {
        id: 2,
        name: 'John'
      },
      {
        id: 3,
        name: 'Aria'
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
          isClearable
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          isSearchable
          isLoading={this.state.loading}
          onChange={value => this.props.callback(value)}
          name="author"
          options={this.state.authors}
          menuIsOpen={menuIsOpen}
        />

      </div>
    );
  }
}
