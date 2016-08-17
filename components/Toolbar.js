class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <ShotMenu />
        <ScreenshotAction />
      </div>
    )
  }
}


class ScreenshotAction extends React.Component {
  constructor(props, _) {
    super(props, _);

    this.state = this.getState();
  }

  getState() {
    return { visiting: false };
  }

  render() {
    let ulClassName = this.state.visiting ? 'shot-display' : 'shot-display hide';

    return (
      <div className="screenshot-menu">
        <a className="menu-button" onClick={this._onMenuClick.bind(this)}></a>
        <ul className={ulClassName}>
          <h3>display options</h3>
          <ul className="large-small">
            <li className="large">large</li>
            <li className="small">small</li>
          </ul>
        </ul>
      </div>
    )
  }

  _onMenuClick() {
    this.setState({visiting: !this.state.visiting});
  }
}
