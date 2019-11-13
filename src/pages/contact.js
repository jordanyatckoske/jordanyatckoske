import React from "react"
import API from "../utils/API"
import YLogo from "../assets/YLogo.svg"
import LinkedInIcon from "../assets/linkedin-brands.svg"
import Layout from "../components/layout"
import Styles from "./contact.module.scss"
import SEO from "../components/seo"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      // emailConfirm: "",
      error: "",
      errors: {},
      // {
      //   errors: [
      //     {
      //       value: "example@example",
      //       msg: "Invalid value",
      //       param: "email",
      //       location: "body",
      //     },
      //     {
      //       value: "jrodan",
      //       msg: "Invalid value",
      //       param: "name",
      //       location: "body",
      //     },
      //   ],
      // },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.ErrorContainer = this.ErrorContainer.bind(this)
  }

  ErrorContainer = () => {
    let error = this.state.error
    let errors = this.state.errors
    let message = null
    // console.log(props.errors)
    if (error) {
      message = <p>{error}</p>
    } else if (errors.errors) {
      // console.log("reached the errors conditional")
      message = errors.map(error => (
        <p key={error.param}>
          Invalid value "{error.value}" in {error.param} field.
        </p>
      ))
    } else {
      return null
    }

    return <>{message}</>
  }

  handleChange = type => event => this.setState({ [type]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    // if (this.state.emailConfirm !== "") {
    //   const errors = this.state.errors
    //   this.setState({ errors: errors.push({}) })
    //   return this.setState({ emailConfirm: "" })
    // }
    API.post("/contact", {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    })
      .then(response => {
        // console.log(response)
        if (response.status === 200) {
          this.setState({
            name: "",
            email: "",
            message: "",
            error: "",
            errors: {},
          })
        }
      })
      .catch(error => {
        // this.setState({ errors: error })
        // console.log("error: ", error)
        // if (error.response) {
        //   console.log(error.response.data)
        // } else if (error.request) {
        //   console.log(error.request)
        // }
        if (error.response) {
          // this.setState({ errors: error })
          // console.log(error)
          // console.log(error.response)
          console.log(error.response.data.errors)
          this.setState({ errors: error.response.data.errors })
        }
        //  else if (error.isAxiosError) {
        //   this.setState({
        //     error: "Unable to process the request at this time.",
        //   })
        // }
        else {
          this.setState({
            error: "Unable to process the request at this time.",
          })
        }
      })
  }

  render() {
    const errorContainer = this.ErrorContainer()

    return (
      <Layout>
        <SEO title="Contact" />
        <div className={Styles.graphic}>
          <YLogo />
        </div>

        <div className={Styles.content}>
          <h1>CONTACT ME</h1>
          <h3>
            Send me a message to learn about my experience or inquire about
            possible development opportunities! Contact me via LinkedIn or the
            form below.
          </h3>
          <div className={Styles.logos}>
            <a
              alt="LinkedIn"
              href="https://www.linkedin.com/in/jordan-yatckoske-523955135/"
              target="_blank"
              rel="noopener"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange("email")}
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              name="emailConfirm"
              type="email"
              value={this.state.emailConfirm}
              onChange={this.handleChange("emailConfirm")}
              className={Styles.displayNone}
              tabindex="-1"
              autoComplete="off"
            />
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange("message")}
              placeholder="Message"
              autoComplete="off"
              required
            />
            <button name="submit" type="submit">
              Send Message
            </button>
          </form>
          <div className={Styles.errors}>
            {/* {this.state.errors || this.state.error
              ? this.ErrorContainer(this.state.error, this.state.errors)
              : null} */}
            {/* {this.ErrorContainer()} */}
            {errorContainer}
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
