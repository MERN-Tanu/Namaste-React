import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "https://dummy-photo.com",
      },
    };
    // console.log(this.props.name + "child constructor")
    // console.log("constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child component did mount");
    // Api call

    const data = await fetch("https://api.github.com/users/mern-tanu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    // console.log(this.props.name + "child Render");
    // const { name, location } = this.props;
    // const { count } = this.state;

    console.log("Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // Never update state variables directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}>
          Count Increase
        </button> */}
        <div>
          loggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: Tanu@7694859</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 *  -------------- Mounting -----
 *
 * constructor (dummy)
 * Render (dummy)
 *       <Html dummy>
 * Component Did Mount
 *      <API Call>
 *       <this.setState>  ---> State variable is updated
 *
 */

/**  --------------  Update ---------
 * Render (API Data)
 *   (<HTML is loaded with new API Data>)
 *
 * ComponentDid Update
 *
 *  */

/***
 *  ComponentWillUnmount
 */
