import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleChange = (event) => (
    this.props.changeFilter(event)
  )

  render() {
    const bookCategories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'ALL'];
    return (
      <div>
        <select onChange={this.changeFilter}>
          {bookCategories.map((p, i) => (
            <option key={i}>{p}</option> /* eslint-disable-line */
          ))}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(null, mapDispatchToProps)(CategoryFilter);
