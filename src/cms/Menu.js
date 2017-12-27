import React, { Component } from "react";

export class MenuControl extends Component {
  render () {
    const MarkdownControl = CMS.getWidget("markdown").control;
    return (
      <div>
        <MarkdownControl {...props} />
      </div>
    );
  }
};

export const MenuPreview = props => {
  const MarkdownPreview = CMS.getWidget("markdown").preview;
  return <div>
    <hr />
    <MarkdownPreview {...props} />
  </div>
};
