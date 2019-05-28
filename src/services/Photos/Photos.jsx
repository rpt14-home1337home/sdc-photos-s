import React from 'react';

// components
import Header from './components/Header/Header.jsx';
import BodyCollapse from './components/BodyCollapse/BodyCollapse.jsx';
import BodyExpand from './components/BodyExpand/BodyExpand.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: this.props.isCollapsed,
      buttonText: 'View all rooms',
      yAxis: this.props.yAxis,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, this.state.yAxis);
  }

  onClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
      buttonText: this.state.isCollapsed ? 'View all rooms' : 'Tour this home',
    });
  }

  render() {
    return (
      <div>
        <Header
          backCallback={this.props.callback}
          buttonCallback={this.onClick}
          buttonText={this.state.buttonText}
        />
        {this.state.isCollapsed ? (
          <BodyCollapse photos={this.props.photos} callback={this.onClick}/>
        ) : (
          <BodyExpand photos={this.props.photos} />
        )}
      </div>
    );
  }
}

Photos.defaultProps = {
  isCollapsed: true,
}

export default Photos;
