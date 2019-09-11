import React from "react";
import logo from "./logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="light"
          light
          expand="md"
          className="main-nav-bar d-flex justify-content-around"
        >
          <NavbarBrand href="#home">
            <img src={logo} alt="logo nav bar" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#carrer">Carrer</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>Departement</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Marketing &amp; PR</DropdownItem>
                  <DropdownItem>Customer Success &amp; Sales</DropdownItem>
                  <DropdownItem>IT, Product, Design &amp; UX</DropdownItem>
                  <DropdownItem>Finance &amp; Administration</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
