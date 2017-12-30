import React, { Component } from "react";
import { List } from "immutable";

export class MenuItemControl extends Component {  
  render () {
    const menuItem = this.props.value;
    const ObjectControl = CMS.getWidget("object").control;
    return <ObjectControl 
      {...this.props } 
      />
  }
  
};

export class MenuItemsControl extends Component {
  getValue() {
    return this.props.value ? this.props.value : "";
  }

  render() {
    const menuItems = this.getValue()
    const ListControl = CMS.getWidget("list").control;
    const classNameWrapper = this.props.classNameWrapper + " il-menuItemsControl"
    return <ListControl 
      {...this.props} 
      classNameWrapper={classNameWrapper}
      />
  }
}

