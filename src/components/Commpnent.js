import { connect } from 'react-redux';

import React from 'react';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

class Component1 extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1)

//导出组件
export default VisibleTodoList;
