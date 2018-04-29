import React from 'react';
import Select from 'react-select';

export default class CategoryFilter extends React.Component {

  static defaultProps = {
    categories: [
      {
        id: 1,
        name: 'Classic'
      },
      {
        id: 2,
        name: 'Popular'
      },
      {
        id: 3,
        name: 'Tech'
      },
    ]
  };

  state = {
    categories: [],
    loading: true
  };

  componentDidMount = () => {
    this.getCategories();
  };

  getCategories = () => {
    setTimeout(() => {
      this.setState({
        categories: this.props.categories,
        loading: false
      });
    }, 500);
  };

  render = () => {
    return (
      <div>

        <Select
          placeholder="Select categories"
          isMulti
          isClearable
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          isSearchable
          isLoading={this.state.loading}
          onChange={value => this.props.callback(value)}
          name="author"
          options={this.state.categories}
        />

      </div>
    );
  }
}
