import React from 'react';

class Note extends React.Component {
    constructor(title, content) {
        super();
        this.state = {
            title: title,
            content: content
          };
    }

    createNote() {
        return (
            <div>
                <div>{this.state.title}</div>
                <div>{this.state.content}</div>
            </div>
        );
    }

}

export default Note;